import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';

const NFTAnalytics = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('7d');
  const [selectedType, setSelectedType] = useState('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');

  // Mock data for demo
  const stats = {
    totalSales: 15432,
    totalVolume: 892.5,
    avgPrice: 0.058,
    activeUsers: 8934
  };

  const topNFTs = [
    { id: 1, name: 'Cosmic Cat #2847', price: 2.4, change: '+12.5%', volume: 45.2 },
    { id: 2, name: 'Space Monkey #1203', price: 1.8, change: '+8.3%', volume: 38.7 },
    { id: 3, name: 'Neon Warrior #7891', price: 3.1, change: '-2.1%', volume: 52.3 },
    { id: 4, name: 'Digital Phoenix #445', price: 1.2, change: '+15.7%', volume: 29.8 },
  ];

  const salesData = [
    { day: 'Пн', sales: 120, volume: 45.2 },
    { day: 'Вт', sales: 185, volume: 67.8 },
    { day: 'Ср', sales: 150, volume: 52.4 },
    { day: 'Чт', sales: 240, volume: 89.6 },
    { day: 'Пт', sales: 320, volume: 125.3 },
    { day: 'Сб', sales: 280, volume: 98.7 },
    { day: 'Вс', sales: 190, volume: 71.2 }
  ];

  const maxSales = Math.max(...salesData.map(d => d.sales));

  return (
    <div 
      className="min-h-screen bg-gradient-to-br from-deep-black via-tech-gray to-deep-black p-6"
      style={{ fontFamily: 'Orbitron, monospace' }}
    >
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-r from-cyber-cyan to-electric-purple rounded-lg flex items-center justify-center">
              <Icon name="TrendingUp" size={24} className="text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-cyber-cyan to-electric-purple bg-clip-text text-transparent">
                NFT ANALYTICS
              </h1>
              <p className="text-gray-400 text-sm">Telegram Gift Analytics Platform</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Badge variant="outline" className="border-cyber-cyan text-cyber-cyan">
              <Icon name="Zap" size={12} className="mr-1" />
              Live
            </Badge>
            <Badge variant="outline" className="border-electric-purple text-electric-purple">
              <Icon name="Activity" size={12} className="mr-1" />
              Real-time
            </Badge>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-8 p-4 bg-card border border-gray-700 rounded-lg">
          <div className="flex items-center space-x-2">
            <Icon name="Calendar" size={16} className="text-cyber-cyan" />
            <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
              <SelectTrigger className="w-32 border-gray-600 bg-background">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="24h">24 часа</SelectItem>
                <SelectItem value="7d">7 дней</SelectItem>
                <SelectItem value="30d">30 дней</SelectItem>
                <SelectItem value="90d">90 дней</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center space-x-2">
            <Icon name="Tag" size={16} className="text-electric-purple" />
            <Select value={selectedType} onValueChange={setSelectedType}>
              <SelectTrigger className="w-36 border-gray-600 bg-background">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Все типы</SelectItem>
                <SelectItem value="premium">Premium</SelectItem>
                <SelectItem value="standard">Standard</SelectItem>
                <SelectItem value="rare">Редкие</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center space-x-2">
            <Icon name="DollarSign" size={16} className="text-neon-blue" />
            <Select value={selectedPriceRange} onValueChange={setSelectedPriceRange}>
              <SelectTrigger className="w-36 border-gray-600 bg-background">
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
      </div>

      {/* Main Dashboard */}
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-gradient-to-br from-card to-card/80 border-gray-700 hover:scale-105 transition-transform duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-400">Всего продаж</CardTitle>
              <Icon name="ShoppingCart" size={16} className="text-cyber-cyan" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-cyber-cyan">{stats.totalSales.toLocaleString()}</div>
              <p className="text-xs text-green-400">+12.5% от вчера</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-card to-card/80 border-gray-700 hover:scale-105 transition-transform duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-400">Общий объем</CardTitle>
              <Icon name="TrendingUp" size={16} className="text-electric-purple" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-electric-purple">{stats.totalVolume} ETH</div>
              <p className="text-xs text-green-400">+8.3% от вчера</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-card to-card/80 border-gray-700 hover:scale-105 transition-transform duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-400">Средняя цена</CardTitle>
              <Icon name="DollarSign" size={16} className="text-neon-blue" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-neon-blue">{stats.avgPrice} ETH</div>
              <p className="text-xs text-red-400">-2.1% от вчера</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-card to-card/80 border-gray-700 hover:scale-105 transition-transform duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-400">Активных пользователей</CardTitle>
              <Icon name="Users" size={16} className="text-green-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-400">{stats.activeUsers.toLocaleString()}</div>
              <p className="text-xs text-green-400">+5.7% от вчера</p>
            </CardContent>
          </Card>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Sales Chart */}
          <Card className="bg-gradient-to-br from-card to-card/80 border-gray-700">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-cyber-cyan flex items-center">
                <Icon name="BarChart3" size={20} className="mr-2" />
                График продаж
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64 flex items-end justify-between space-x-2">
                {salesData.map((data, index) => (
                  <div key={index} className="flex flex-col items-center flex-1">
                    <div 
                      className="w-full bg-gradient-to-t from-cyber-cyan to-electric-purple rounded-t-md transition-all duration-500 hover:scale-110"
                      style={{ 
                        height: `${(data.sales / maxSales) * 200}px`,
                        minHeight: '10px'
                      }}
                    />
                    <div className="text-xs text-gray-400 mt-2">{data.day}</div>
                    <div className="text-xs text-cyber-cyan font-semibold">{data.sales}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Volume Chart */}
          <Card className="bg-gradient-to-br from-card to-card/80 border-gray-700">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-electric-purple flex items-center">
                <Icon name="Activity" size={20} className="mr-2" />
                График объемов
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64 flex items-end justify-between space-x-2">
                {salesData.map((data, index) => (
                  <div key={index} className="flex flex-col items-center flex-1">
                    <div 
                      className="w-full bg-gradient-to-t from-electric-purple to-neon-blue rounded-t-md transition-all duration-500 hover:scale-110"
                      style={{ 
                        height: `${(data.volume / 130) * 200}px`,
                        minHeight: '10px'
                      }}
                    />
                    <div className="text-xs text-gray-400 mt-2">{data.day}</div>
                    <div className="text-xs text-electric-purple font-semibold">{data.volume}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Top NFTs */}
        <Card className="bg-gradient-to-br from-card to-card/80 border-gray-700">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-neon-blue flex items-center">
              <Icon name="Trophy" size={20} className="mr-2" />
              Топ NFT подарков
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topNFTs.map((nft, index) => (
                <div 
                  key={nft.id} 
                  className="flex items-center justify-between p-4 bg-background/50 rounded-lg border border-gray-700 hover:border-cyber-cyan transition-colors duration-300 hover:scale-[1.02]"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-cyber-cyan to-electric-purple rounded-full flex items-center justify-center text-sm font-bold">
                      #{index + 1}
                    </div>
                    <div>
                      <div className="font-semibold text-white">{nft.name}</div>
                      <div className="text-sm text-gray-400">Объем: {nft.volume} ETH</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <div className="font-semibold text-cyber-cyan">{nft.price} ETH</div>
                      <div className={`text-sm ${nft.change.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
                        {nft.change}
                      </div>
                    </div>
                    <Button size="sm" variant="outline" className="border-electric-purple text-electric-purple hover:bg-electric-purple hover:text-white">
                      <Icon name="ExternalLink" size={14} />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Market Activity */}
        <Card className="bg-gradient-to-br from-card to-card/80 border-gray-700">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-green-400 flex items-center">
              <Icon name="Zap" size={20} className="mr-2" />
              Активность рынка
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-background/30 rounded-lg border border-gray-700">
                <div className="text-2xl font-bold text-cyber-cyan mb-2">87%</div>
                <div className="text-sm text-gray-400">Рост продаж</div>
                <div className="text-xs text-green-400 mt-1">↑ +15% за неделю</div>
              </div>
              <div className="text-center p-4 bg-background/30 rounded-lg border border-gray-700">
                <div className="text-2xl font-bold text-electric-purple mb-2">234</div>
                <div className="text-sm text-gray-400">Новых пользователей</div>
                <div className="text-xs text-green-400 mt-1">↑ +23% за неделю</div>
              </div>
              <div className="text-center p-4 bg-background/30 rounded-lg border border-gray-700">
                <div className="text-2xl font-bold text-neon-blue mb-2">12.4s</div>
                <div className="text-sm text-gray-400">Среднее время продажи</div>
                <div className="text-xs text-red-400 mt-1">↓ -8% за неделю</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Footer */}
      <div className="max-w-7xl mx-auto mt-16 text-center">
        <div className="text-sm text-gray-400 mb-4">
          Powered by Telegram NFT Analytics • Real-time data updates every 30 seconds
        </div>
        <div className="flex justify-center space-x-4">
          <Badge variant="outline" className="border-cyber-cyan text-cyber-cyan">
            <Icon name="Database" size={12} className="mr-1" />
            Live Data
          </Badge>
          <Badge variant="outline" className="border-electric-purple text-electric-purple">
            <Icon name="Shield" size={12} className="mr-1" />
            Secure
          </Badge>
          <Badge variant="outline" className="border-neon-blue text-neon-blue">
            <Icon name="Zap" size={12} className="mr-1" />
            Fast
          </Badge>
        </div>
      </div>
    </div>
  );
};

export default NFTAnalytics;