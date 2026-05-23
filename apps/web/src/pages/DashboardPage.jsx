import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { useAuth } from '@/contexts/AuthContext';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { useToast } from '@/components/ui/use-toast';
import pb from '@/lib/pocketbaseClient';
import { mockProducts } from '@/data/mockProductData';
import { Bell, Mail, Settings, Trash2, Edit2, User } from 'lucide-react';
import PriceAlertModal from '@/components/PriceAlertModal.jsx';
import { formatINR } from '@/lib/priceFormatter';

export default function DashboardPage() {
  const { currentUser } = useAuth();
  const { toast } = useToast();
  const [alerts, setAlerts] = useState([]);
  const [waitlist, setWaitlist] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingAlert, setEditingAlert] = useState(null);
  const [isAlertModalOpen, setIsAlertModalOpen] = useState(false);

  // Mock notification settings
  const [emailNotifs, setEmailNotifs] = useState(true);
  const [pushNotifs, setPushNotifs] = useState(false);

  const fetchData = async () => {
    if (!currentUser) return;
    setLoading(true);
    try {
      const alertsData = await pb.collection('priceAlerts').getFullList({
        filter: `userId = "${currentUser.id}"`,
        sort: '-created',
        $autoCancel: false
      });
      setAlerts(alertsData);

      const waitlistData = await pb.collection('restockWaitlist').getFullList({
        filter: `userId = "${currentUser.id}"`,
        sort: '-created',
        $autoCancel: false
      });
      setWaitlist(waitlistData);
    } catch (error) {
      console.error("Error fetching dashboard data:", error);
      toast({ title: "Error", description: "Failed to load dashboard data.", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [currentUser]);

  const handleDeleteAlert = async (id) => {
    if (!window.confirm("Are you sure you want to delete this alert?")) return;
    try {
      await pb.collection('priceAlerts').delete(id, { $autoCancel: false });
      setAlerts(alerts.filter(a => a.id !== id));
      toast({ title: "Alert Deleted", description: "Price alert removed successfully." });
    } catch (error) {
      toast({ title: "Error", description: "Failed to delete alert.", variant: "destructive" });
    }
  };

  const handleDeleteWaitlist = async (id) => {
    if (!window.confirm("Remove from waitlist?")) return;
    try {
      await pb.collection('restockWaitlist').delete(id, { $autoCancel: false });
      setWaitlist(waitlist.filter(w => w.id !== id));
      toast({ title: "Removed", description: "Removed from restock waitlist." });
    } catch (error) {
      toast({ title: "Error", description: "Failed to remove from waitlist.", variant: "destructive" });
    }
  };

  const getProductDetails = (productId) => {
    return mockProducts.find(p => p.id === productId) || { name: 'Unknown Product', image: '' };
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] py-12">
      <Helmet>
        <title>Dashboard | Fashionable</title>
      </Helmet>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
        >
          <div>
            <h1 className="text-4xl font-bold text-white mb-2">My Dashboard</h1>
            <p className="text-gray-400">Manage your alerts and preferences</p>
          </div>
          
          <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-4 flex items-center gap-4">
            <div className="bg-[#00D9FF]/20 p-3 rounded-full">
              <User className="w-6 h-6 text-[#00D9FF]" />
            </div>
            <div>
              <p className="text-white font-semibold">{currentUser?.email}</p>
              <p className="text-xs text-gray-500">Member since {new Date(currentUser?.created).toLocaleDateString()}</p>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-6">
            <h3 className="text-gray-400 text-sm font-medium mb-2">Active Alerts</h3>
            <p className="text-3xl font-bold text-[#00D9FF]">{alerts.filter(a => a.isActive).length}</p>
          </div>
          <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-6">
            <h3 className="text-gray-400 text-sm font-medium mb-2">Waitlist Items</h3>
            <p className="text-3xl font-bold text-[#FF006E]">{waitlist.length}</p>
          </div>
          <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-6">
            <h3 className="text-gray-400 text-sm font-medium mb-2">Total Savings</h3>
            <p className="text-3xl font-bold text-white">{formatINR(0)}</p>
          </div>
        </div>

        <Tabs defaultValue="alerts" className="w-full">
          <TabsList className="w-full justify-start mb-6 bg-transparent border-b border-[#2a2a2a] rounded-none p-0 h-auto">
            <TabsTrigger value="alerts" className="px-6 py-3 rounded-t-lg data-[state=active]:bg-[#1a1a1a] data-[state=active]:text-[#00D9FF] data-[state=active]:border-b-2 data-[state=active]:border-[#00D9FF]">
              Price Alerts
            </TabsTrigger>
            <TabsTrigger value="waitlist" className="px-6 py-3 rounded-t-lg data-[state=active]:bg-[#1a1a1a] data-[state=active]:text-[#FF006E] data-[state=active]:border-b-2 data-[state=active]:border-[#FF006E]">
              Restock Waitlist
            </TabsTrigger>
            <TabsTrigger value="settings" className="px-6 py-3 rounded-t-lg data-[state=active]:bg-[#1a1a1a] data-[state=active]:text-white data-[state=active]:border-b-2 data-[state=active]:border-white">
              Preferences
            </TabsTrigger>
          </TabsList>

          <TabsContent value="alerts" className="space-y-4">
            {loading ? (
              <div className="text-center py-12 text-gray-500">Loading alerts...</div>
            ) : alerts.length === 0 ? (
              <div className="text-center py-12 bg-[#1a1a1a] rounded-xl border border-[#2a2a2a]">
                <Bell className="w-12 h-12 text-gray-600 mx-auto mb-4" />
                <h3 className="text-white font-bold text-lg">No Active Alerts</h3>
                <p className="text-gray-400">Start tracking products to see them here.</p>
              </div>
            ) : (
              alerts.map((alert) => {
                const product = getProductDetails(alert.productId);
                return (
                  <motion.div 
                    key={alert.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-4 flex items-center gap-4 hover:border-[#00D9FF] transition-colors"
                  >
                    <img src={product.image} alt={product.name} className="w-16 h-16 object-cover rounded-lg" />
                    <div className="flex-grow">
                      <h3 className="text-white font-bold">{product.name}</h3>
                      <p className="text-sm text-gray-400">
                        Target: {alert.targetPrice ? formatINR(alert.targetPrice) : `${alert.percentageDrop}% drop`}
                        {alert.isActive ? <span className="ml-2 text-green-400 text-xs bg-green-400/10 px-2 py-0.5 rounded">Active</span> : <span className="ml-2 text-gray-500 text-xs bg-gray-500/10 px-2 py-0.5 rounded">Paused</span>}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <button 
                        onClick={() => {
                          setEditingAlert(alert);
                          setIsAlertModalOpen(true);
                        }}
                        className="p-2 text-gray-400 hover:text-white hover:bg-[#2a2a2a] rounded-lg transition-colors"
                      >
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button 
                        onClick={() => handleDeleteAlert(alert.id)}
                        className="p-2 text-gray-400 hover:text-red-500 hover:bg-[#2a2a2a] rounded-lg transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </motion.div>
                );
              })
            )}
          </TabsContent>

          <TabsContent value="waitlist" className="space-y-4">
            {loading ? (
              <div className="text-center py-12 text-gray-500">Loading waitlist...</div>
            ) : waitlist.length === 0 ? (
              <div className="text-center py-12 bg-[#1a1a1a] rounded-xl border border-[#2a2a2a]">
                <Mail className="w-12 h-12 text-gray-600 mx-auto mb-4" />
                <h3 className="text-white font-bold text-lg">Waitlist Empty</h3>
                <p className="text-gray-400">You're not waiting for any restocks.</p>
              </div>
            ) : (
              waitlist.map((item) => {
                const product = getProductDetails(item.productId);
                return (
                  <motion.div 
                    key={item.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-4 flex items-center gap-4 hover:border-[#FF006E] transition-colors"
                  >
                    <img src={product.image} alt={product.name} className="w-16 h-16 object-cover rounded-lg" />
                    <div className="flex-grow">
                      <h3 className="text-white font-bold">{product.name}</h3>
                      <p className="text-sm text-gray-400">Notifying: {item.email}</p>
                    </div>
                    <button 
                      onClick={() => handleDeleteWaitlist(item.id)}
                      className="p-2 text-gray-400 hover:text-red-500 hover:bg-[#2a2a2a] rounded-lg transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </motion.div>
                );
              })
            )}
          </TabsContent>

          <TabsContent value="settings">
            <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-6 space-y-6">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Settings className="w-5 h-5" /> Notification Preferences
              </h3>
              
              <div className="flex items-center justify-between py-4 border-b border-[#2a2a2a]">
                <div>
                  <h4 className="text-white font-medium">Email Notifications</h4>
                  <p className="text-sm text-gray-400">Receive price alerts via email</p>
                </div>
                <button 
                  onClick={() => setEmailNotifs(!emailNotifs)}
                  className={`w-12 h-6 rounded-full transition-colors relative ${emailNotifs ? 'bg-[#00D9FF]' : 'bg-gray-600'}`}
                >
                  <span className={`absolute top-1 left-1 bg-white w-4 h-4 rounded-full transition-transform ${emailNotifs ? 'translate-x-6' : 'translate-x-0'}`} />
                </button>
              </div>

              <div className="flex items-center justify-between py-4">
                <div>
                  <h4 className="text-white font-medium">Push Notifications</h4>
                  <p className="text-sm text-gray-400">Receive alerts on your device</p>
                </div>
                <button 
                  onClick={() => setPushNotifs(!pushNotifs)}
                  className={`w-12 h-6 rounded-full transition-colors relative ${pushNotifs ? 'bg-[#00D9FF]' : 'bg-gray-600'}`}
                >
                  <span className={`absolute top-1 left-1 bg-white w-4 h-4 rounded-full transition-transform ${pushNotifs ? 'translate-x-6' : 'translate-x-0'}`} />
                </button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {editingAlert && (
        <PriceAlertModal
          isOpen={isAlertModalOpen}
          onClose={() => {
            setIsAlertModalOpen(false);
            setEditingAlert(null);
          }}
          product={getProductDetails(editingAlert.productId)}
          existingAlert={editingAlert}
          onAlertUpdated={fetchData}
        />
      )}
    </div>
  );
}