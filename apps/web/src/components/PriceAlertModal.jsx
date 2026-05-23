import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/components/ui/use-toast';
import pb from '@/lib/pocketbaseClient';
import { Bell, DollarSign, Percent } from 'lucide-react';
import { formatINR } from '@/lib/priceFormatter';

export default function PriceAlertModal({ isOpen, onClose, product, existingAlert = null, onAlertUpdated }) {
  const { currentUser } = useAuth();
  const { toast } = useToast();
  const [mode, setMode] = useState('target'); // 'target' or 'percentage'
  const [targetPrice, setTargetPrice] = useState('');
  const [percentageDrop, setPercentageDrop] = useState('');
  const [isActive, setIsActive] = useState(true);
  const [loading, setLoading] = useState(false);

  // Get current lowest price for reference
  const currentPrice = product ? Math.min(...product.retailers.map(r => r.currentPrice)) : 0;

  useEffect(() => {
    if (existingAlert) {
      setTargetPrice(existingAlert.targetPrice || '');
      setPercentageDrop(existingAlert.percentageDrop || '');
      setIsActive(existingAlert.isActive);
      setMode(existingAlert.targetPrice ? 'target' : 'percentage');
    } else {
      setTargetPrice('');
      setPercentageDrop('');
      setIsActive(true);
      setMode('target');
    }
  }, [existingAlert, isOpen]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!currentUser) return;

    setLoading(true);
    try {
      const data = {
        userId: currentUser.id,
        productId: product.id,
        isActive,
        targetPrice: mode === 'target' ? parseFloat(targetPrice) : null,
        percentageDrop: mode === 'percentage' ? parseFloat(percentageDrop) : null,
      };

      if (existingAlert) {
        await pb.collection('priceAlerts').update(existingAlert.id, data, { $autoCancel: false });
        toast({ title: "Alert Updated", description: "Your price alert has been updated successfully." });
      } else {
        await pb.collection('priceAlerts').create(data, { $autoCancel: false });
        toast({ title: "Alert Created", description: "We'll notify you when the price drops!" });
      }
      
      if (onAlertUpdated) onAlertUpdated();
      onClose();
    } catch (error) {
      console.error("Error saving alert:", error);
      toast({ 
        title: "Error", 
        description: "Failed to save price alert. Please try again.", 
        variant: "destructive" 
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Bell className="w-5 h-5 text-[#00D9FF]" />
            Set Price Alert
          </DialogTitle>
          <DialogDescription>
            Get notified when {product?.name} drops in price.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 py-4">
          <div className="flex gap-2 p-1 bg-[#2a2a2a] rounded-lg">
            <button
              type="button"
              onClick={() => setMode('target')}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all ${
                mode === 'target' 
                  ? 'bg-[#00D9FF] text-black shadow-sm' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Target Price
            </button>
            <button
              type="button"
              onClick={() => setMode('percentage')}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all ${
                mode === 'percentage' 
                  ? 'bg-[#00D9FF] text-black shadow-sm' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              % Drop
            </button>
          </div>

          {mode === 'target' ? (
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">Target Price (₹)</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">₹</span>
                <input
                  type="number"
                  step="1"
                  value={targetPrice}
                  onChange={(e) => setTargetPrice(e.target.value)}
                  placeholder={currentPrice ? Math.floor(currentPrice * 0.9) : "0"}
                  className="w-full bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg pl-10 pr-4 py-2 text-white focus:border-[#00D9FF] focus:outline-none"
                  required={mode === 'target'}
                />
              </div>
              <p className="text-xs text-gray-500">Current lowest price: {formatINR(currentPrice)}</p>
            </div>
          ) : (
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">Percentage Drop (%)</label>
              <div className="relative">
                <Percent className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                <input
                  type="number"
                  min="1"
                  max="99"
                  value={percentageDrop}
                  onChange={(e) => setPercentageDrop(e.target.value)}
                  placeholder="20"
                  className="w-full bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg pl-10 pr-4 py-2 text-white focus:border-[#00D9FF] focus:outline-none"
                  required={mode === 'percentage'}
                />
              </div>
            </div>
          )}

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="isActive"
              checked={isActive}
              onChange={(e) => setIsActive(e.target.checked)}
              className="w-4 h-4 rounded border-gray-600 bg-[#0a0a0a] text-[#00D9FF] focus:ring-[#00D9FF]"
            />
            <label htmlFor="isActive" className="text-sm text-gray-300">Alert is active</label>
          </div>

          <DialogFooter>
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium text-gray-400 hover:text-white transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="bg-gradient-to-r from-[#00D9FF] to-[#FF006E] text-white font-bold py-2 px-6 rounded-lg hover:shadow-[0_0_15px_rgba(0,217,255,0.5)] transition-all disabled:opacity-50"
            >
              {loading ? 'Saving...' : existingAlert ? 'Update Alert' : 'Create Alert'}
            </button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}