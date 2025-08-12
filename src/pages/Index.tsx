import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

const NFTAnalytics = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('7d');
  const [selectedType, setSelectedType] = useState('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');
  const [liveData, setLiveData] = useState({
    totalSales: 0,
    totalVolume: 0,
    avgPrice: 0,
    activeUsers: 0
  });
  const [lastUpdate, setLastUpdate] = useState(new Date());

  // Simulate real-time data updates
  useEffect(() => {
    const updateData = () => {
      setLiveData(prev => ({
        totalSales: 15432 + Math.floor(Math.random() * 100),
        totalVolume: +(892.5 + (Math.random() * 10 - 5)).toFixed(1),
        avgPrice: +(0.058 + (Math.random() * 0.01 - 0.005)).toFixed(3),
        activeUsers: 8934 + Math.floor(Math.random() * 50)
      }));
      setLastUpdate(new Date());
    };

    updateData();
    const interval = setInterval(updateData, 3000);
    return () => clearInterval(interval);
  }, []);

  // Live collections with real-time updates
  const [collections, setCollections] = useState([
    { 
      id: 1, 
      name: 'Telegram Stars', 
      price: 2.4, 
      change: 12.5, 
      volume: 145.2, 
      lastSale: new Date(Date.now() - 45000),
      hotness: 95,
      trend: 'hot'
    },
    { 
      id: 2, 
      name: 'Crypto Bears', 
      price: 1.8, 
      change: 8.3, 
      volume: 98.7, 
      lastSale: new Date(Date.now() - 120000),
      hotness: 87,
      trend: 'rising'
    },
    { 
      id: 3, 
      name: 'Digital Gems', 
      price: 3.1, 
      change: -2.1, 
      volume: 76.3, 
      lastSale: new Date(Date.now() - 300000),
      hotness: 73,
      trend: 'cooling'
    },
    { 
      id: 4, 
      name: 'Meta Gifts', 
      price: 1.2, 
      change: 15.7, 
      volume: 129.8, 
      lastSale: new Date(Date.now() - 30000),
      hotness: 99,
      trend: 'fire'
    },
  ]);

  // Update collections every 5 seconds
  useEffect(() => {
    const updateCollections = () => {
      setCollections(prev => prev.map(collection => {
        const priceChange = (Math.random() - 0.5) * 0.1;
        const volumeChange = (Math.random() - 0.5) * 10;
        const changePercent = (Math.random() - 0.5) * 5;
        
        return {
          ...collection,
          price: +(collection.price + priceChange).toFixed(2),
          volume: +(collection.volume + volumeChange).toFixed(1),
          change: +(collection.change + changePercent).toFixed(1),
          lastSale: Math.random() > 0.7 ? new Date() : collection.lastSale,
          hotness: Math.max(0, Math.min(100, collection.hotness + Math.floor((Math.random() - 0.5) * 10)))
        };
      }));
    };

    const interval = setInterval(updateCollections, 5000);
    return () => clearInterval(interval);
  }, []);

  const formatTimeAgo = (date) => {
    const now = new Date();
    const seconds = Math.floor((now - date) / 1000);
    
    if (seconds < 60) return `${seconds}с назад`;
    if (seconds < 3600) return `${Math.floor(seconds / 60)}м назад`;
    if (seconds < 86400) return `${Math.floor(seconds / 3600)}ч назад`;
    return `${Math.floor(seconds / 86400)}д назад`;
  };

  const getTrendIcon = (trend) => {
    switch(trend) {
      case 'fire': return 'Flame';
      case 'hot': return 'TrendingUp';
      case 'rising': return 'ArrowUp';
      case 'cooling': return 'ArrowDown';
      default: return 'Minus';
    }
  };

  const getTrendColor = (trend) => {
    switch(trend) {
      case 'fire': return 'text-red-500';
      case 'hot': return 'text-orange-500';
      case 'rising': return 'text-green-500';
      case 'cooling': return 'text-blue-500';
      default: return 'text-gray-500';
    }
  };

  // Live market data simulation
  const [marketActivity, setMarketActivity] = useState([
    { type: 'sale', collection: 'Telegram Stars', price: 2.4, time: new Date() },
    { type: 'bid', collection: 'Crypto Bears', price: 1.9, time: new Date(Date.now() - 30000) },
    { type: 'list', collection: 'Digital Gems', price: 3.2, time: new Date(Date.now() - 60000) }
  ]);

  useEffect(() => {
    const addMarketActivity = () => {
      const activities = ['sale', 'bid', 'list'];
      const collectionNames = ['Telegram Stars', 'Crypto Bears', 'Digital Gems', 'Meta Gifts'];
      
      const newActivity = {
        type: activities[Math.floor(Math.random() * activities.length)],
        collection: collectionNames[Math.floor(Math.random() * collectionNames.length)],
        price: +(Math.random() * 3 + 0.5).toFixed(2),
        time: new Date()
      };

      setMarketActivity(prev => [newActivity, ...prev.slice(0, 9)]);
    };

    const interval = setInterval(addMarketActivity, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-6"
      style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
    >
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <div className="w-14 h-14 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-xl flex items-center justify-center animate-pulse-glow">
              <Icon name="BarChart3" size={28} className="text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                NFT Analytics Hub
              </h1>
              <p className="text-slate-400 text-sm flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2"></span>
                Live Telegram Gift Data • Обновлено {formatTimeAgo(lastUpdate)}
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
              <Icon name="Radio" size={12} className="mr-1 animate-pulse" />
              LIVE
            </Badge>
          </div>
        </div>

        {/* Filters */}
        <Card className="bg-slate-800/50 border-slate-700 backdrop-blur">
          <CardContent className="p-4">
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2">
                <Icon name="Calendar" size={16} className="text-blue-400" />
                <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
                  <SelectTrigger className="w-32 border-slate-600 bg-slate-900">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1h">1 час</SelectItem>
                    <SelectItem value="24h">24 часа</SelectItem>
                    <SelectItem value="7d">7 дней</SelectItem>
                    <SelectItem value="30d">30 дней</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center space-x-2">
                <Icon name="Filter" size={16} className="text-purple-400" />
                <Select value={selectedType} onValueChange={setSelectedType}>
                  <SelectTrigger className="w-36 border-slate-600 bg-slate-900">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Все коллекции</SelectItem>
                    <SelectItem value="trending">В тренде</SelectItem>
                    <SelectItem value="new">Новые</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center space-x-2">
                <Icon name="DollarSign" size={16} className="text-pink-400" />
                <Select value={selectedPriceRange} onValueChange={setSelectedPriceRange}>
                  <SelectTrigger className="w-36 border-slate-600 bg-slate-900">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Все цены</SelectItem>
                    <SelectItem value="0-1">0 - 1 ETH</SelectItem>
                    <SelectItem value="1-5">1 - 5 ETH</SelectItem>
                    <SelectItem value="5+">5+ ETH</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Dashboard */}
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Live Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur hover:scale-105 transition-all duration-300 animate-slide-up">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-slate-400">Продажи Live</CardTitle>
              <Icon name="ShoppingCart" size={16} className="text-blue-400 animate-bounce" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-blue-400 animate-counter-up">
                {liveData.totalSales.toLocaleString()}
              </div>
              <p className="text-xs text-green-400 flex items-center">
                <Icon name="TrendingUp" size={12} className="mr-1" />
                +12.5% сегодня
              </p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur hover:scale-105 transition-all duration-300 animate-slide-up">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-slate-400">Объем ETH</CardTitle>
              <Icon name="Waves" size={16} className="text-purple-400 animate-bounce" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-purple-400 animate-counter-up">
                {liveData.totalVolume}
              </div>
              <p className="text-xs text-green-400 flex items-center">
                <Icon name="ArrowUp" size={12} className="mr-1" />
                +8.3% за час
              </p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur hover:scale-105 transition-all duration-300 animate-slide-up">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-slate-400">Средняя цена</CardTitle>
              <Icon name="Target" size={16} className="text-pink-400 animate-bounce" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-pink-400 animate-counter-up">
                {liveData.avgPrice}
              </div>
              <p className="text-xs text-red-400 flex items-center">
                <Icon name="ArrowDown" size={12} className="mr-1" />
                -2.1% за час
              </p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur hover:scale-105 transition-all duration-300 animate-slide-up">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-slate-400">Активных</CardTitle>
              <Icon name="Users" size={16} className="text-green-400 animate-bounce" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-green-400 animate-counter-up">
                {liveData.activeUsers.toLocaleString()}
              </div>
              <p className="text-xs text-green-400 flex items-center">
                <Icon name="UserPlus" size={12} className="mr-1" />
                +47 за 10 мин
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Live Collections with Hotness */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-white flex items-center">
                <Icon name="Flame" size={20} className="mr-2 text-orange-500" />
                Live коллекции
                <Badge className="ml-2 bg-red-500/20 text-red-400 border-red-500/30 animate-pulse">
                  Обновляется каждые 5с
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {collections.map((collection, index) => (
                  <div 
                    key={collection.id} 
                    className="flex items-center justify-between p-4 bg-slate-900/50 rounded-lg border border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:scale-[1.02]"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="flex flex-col items-center">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-sm font-bold">
                          #{index + 1}
                        </div>
                        <Icon 
                          name={getTrendIcon(collection.trend)} 
                          size={14} 
                          className={`mt-1 ${getTrendColor(collection.trend)} animate-bounce`} 
                        />
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-white flex items-center">
                          {collection.name}
                          {collection.hotness > 90 && (
                            <Icon name="Zap" size={14} className="ml-2 text-yellow-500 animate-pulse" />
                          )}
                        </div>
                        <div className="text-xs text-slate-400 mb-1">
                          Последняя продажа: {formatTimeAgo(collection.lastSale)}
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="text-xs text-slate-400">Активность:</span>
                          <Progress value={collection.hotness} className="w-16 h-1" />
                          <span className="text-xs text-blue-400">{collection.hotness}%</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-blue-400">{collection.price} ETH</div>
                      <div className={`text-sm ${collection.change > 0 ? 'text-green-400' : 'text-red-400'}`}>
                        {collection.change > 0 ? '+' : ''}{collection.change}%
                      </div>
                      <div className="text-xs text-slate-400">{collection.volume} ETH объем</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Live Market Activity */}
          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-white flex items-center">
                <Icon name="Activity" size={20} className="mr-2 text-green-500" />
                Live активность
                <Badge className="ml-2 bg-green-500/20 text-green-400 border-green-500/30 animate-pulse">
                  Новые транзакции
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 max-h-80 overflow-y-auto">
                {marketActivity.map((activity, index) => (
                  <div 
                    key={index}
                    className="flex items-center justify-between p-3 bg-slate-900/30 rounded-lg border border-slate-700 hover:bg-slate-900/50 transition-colors animate-slide-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-3 h-3 rounded-full ${
                        activity.type === 'sale' ? 'bg-green-500' : 
                        activity.type === 'bid' ? 'bg-blue-500' : 'bg-yellow-500'
                      } animate-pulse`}></div>
                      <div>
                        <div className="font-medium text-white text-sm">
                          {activity.type === 'sale' ? '🎉 Продажа' : 
                           activity.type === 'bid' ? '📈 Ставка' : '📋 Лист'}
                        </div>
                        <div className="text-xs text-slate-400">{activity.collection}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-purple-400">{activity.price} ETH</div>
                      <div className="text-xs text-slate-400">{formatTimeAgo(activity.time)}</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Real-time metrics */}
        <Card className="bg-slate-800/50 border-slate-700 backdrop-blur">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-white flex items-center">
              <Icon name="TrendingUp" size={20} className="mr-2 text-blue-500" />
              Метрики в реальном времени
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-slate-900/30 rounded-lg border border-slate-700">
                <div className="text-3xl font-bold text-blue-400 mb-2">
                  {((liveData.totalVolume / liveData.totalSales) * 100).toFixed(1)}%
                </div>
                <div className="text-sm text-slate-400">Конверсия продаж</div>
                <div className="text-xs text-green-400 mt-2 flex items-center justify-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-1"></div>
                  Растет
                </div>
              </div>
              
              <div className="text-center p-6 bg-slate-900/30 rounded-lg border border-slate-700">
                <div className="text-3xl font-bold text-purple-400 mb-2">
                  {Math.floor(Math.random() * 50 + 150)}
                </div>
                <div className="text-sm text-slate-400">Транзакций/час</div>
                <div className="text-xs text-blue-400 mt-2 flex items-center justify-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse mr-1"></div>
                  Стабильно
                </div>
              </div>
              
              <div className="text-center p-6 bg-slate-900/30 rounded-lg border border-slate-700">
                <div className="text-3xl font-bold text-pink-400 mb-2">
                  {(Math.random() * 2 + 8).toFixed(1)}s
                </div>
                <div className="text-sm text-slate-400">Время обработки</div>
                <div className="text-xs text-green-400 mt-2 flex items-center justify-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-1"></div>
                  Быстро
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Footer */}
      <div className="max-w-7xl mx-auto mt-16 text-center">
        <div className="flex justify-center items-center space-x-4 mb-4">
          <div className="flex items-center space-x-2 text-green-400">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm">Подключен к Telegram API</span>
          </div>
          <div className="w-px h-4 bg-slate-600"></div>
          <div className="text-sm text-slate-400">
            Обновление каждые 3 секунды
          </div>
        </div>
        <div className="flex justify-center space-x-3">
          <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">
            <Icon name="Database" size={12} className="mr-1" />
            Real-time
          </Badge>
          <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
            <Icon name="Shield" size={12} className="mr-1" />
            Secure API
          </Badge>
          <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30">
            <Icon name="Zap" size={12} className="mr-1" />
            High Performance
          </Badge>
        </div>
      </div>
    </div>
  );
};

export default NFTAnalytics;