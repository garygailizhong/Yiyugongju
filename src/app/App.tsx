import { ToolCard } from '@/app/components/ToolCard';
import { CategorySection } from '@/app/components/CategorySection';
import { BackgroundDecoration } from '@/app/components/BackgroundDecoration';
import logo from 'figma:asset/2a230b3b45cc43ba1d59f9c26320882bd6e80810.png';
import { 
  Calculator, 
  QrCode, 
  FileText, 
  Calendar,
  Clock,
  Ruler,
  Type,
  ImageIcon,
  Languages,
  Compass,
  Wifi,
  Battery,
  Zap,
  Briefcase,
  Camera,
  Settings,
  Heart
} from 'lucide-react';

export default function App() {
  const categories = [
    {
      id: 1,
      name: '办公效率',
      icon: Briefcase,
      color: 'from-blue-500 to-cyan-500',
      tools: [
        {
          id: 1,
          name: '智能计算',
          icon: Calculator,
          gradient: 'from-blue-500 via-blue-600 to-cyan-600',
          description: '科学计算'
        },
        {
          id: 2,
          name: '文件转换',
          icon: FileText,
          gradient: 'from-orange-500 via-orange-600 to-red-600',
          description: '格式互转'
        },
        {
          id: 3,
          name: 'AI翻译',
          icon: Languages,
          gradient: 'from-violet-500 via-purple-500 to-fuchsia-600',
          description: '多语言'
        },
        {
          id: 4,
          name: '二维码',
          icon: QrCode,
          gradient: 'from-purple-500 via-purple-600 to-pink-600',
          description: '扫描生成'
        }
      ]
    },
    {
      id: 2,
      name: '图像处理',
      icon: Camera,
      color: 'from-pink-500 to-rose-500',
      tools: [
        {
          id: 5,
          name: '图片工具',
          icon: ImageIcon,
          gradient: 'from-teal-500 via-cyan-500 to-blue-600',
          description: '编辑美化'
        },
        {
          id: 6,
          name: 'OCR识别',
          icon: Type,
          gradient: 'from-pink-500 via-rose-500 to-red-600',
          description: '文字提取'
        }
      ]
    },
    {
      id: 3,
      name: '测量工具',
      icon: Ruler,
      color: 'from-yellow-500 to-orange-500',
      tools: [
        {
          id: 7,
          name: 'AR测距',
          icon: Ruler,
          gradient: 'from-yellow-500 via-amber-500 to-orange-600',
          description: '智能测量'
        },
        {
          id: 8,
          name: '指南针',
          icon: Compass,
          gradient: 'from-sky-500 via-blue-500 to-indigo-600',
          description: '精准定位'
        }
      ]
    },
    {
      id: 4,
      name: '生活助手',
      icon: Heart,
      color: 'from-emerald-500 to-teal-500',
      tools: [
        {
          id: 9,
          name: '日历查询',
          icon: Calendar,
          gradient: 'from-green-500 via-emerald-500 to-teal-600',
          description: '节假日查询'
        },
        {
          id: 10,
          name: '计时器',
          icon: Clock,
          gradient: 'from-indigo-500 via-indigo-600 to-blue-600',
          description: '倒计时'
        }
      ]
    },
    {
      id: 5,
      name: '系统工具',
      icon: Settings,
      color: 'from-purple-500 to-indigo-500',
      tools: [
        {
          id: 11,
          name: '网速测试',
          icon: Wifi,
          gradient: 'from-lime-500 via-green-500 to-emerald-600',
          description: '测试网速'
        },
        {
          id: 12,
          name: '电池优化',
          icon: Battery,
          gradient: 'from-emerald-500 via-teal-500 to-cyan-600',
          description: '省电管理'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-950 overflow-hidden relative">
      {/* Animated Background */}
      <BackgroundDecoration />
      
      {/* Main Content Container */}
      <div className="relative z-10">
        {/* Header */}
        <div className="backdrop-blur-xl bg-white/5 border-b border-white/10 sticky top-0 z-20">
          <div className="max-w-md mx-auto px-5 py-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                {/* Logo */}
                <div className="w-12 h-12 rounded-2xl bg-white/95 backdrop-blur-sm flex items-center justify-center p-2 shadow-lg">
                  <img src={logo} alt="一隅工具" className="w-full h-full object-contain" />
                </div>
                {/* Brand Text */}
                <div>
                  <h1 className="text-xl text-white tracking-tight">一隅工具</h1>
                  <p className="text-xs text-white/60 mt-0.5">这是你生活一隅小帮手</p>
                </div>
              </div>
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg">
                <Zap className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-md mx-auto px-5 py-6 pb-10">
          {/* Categories */}
          <div className="space-y-6">
            {categories.map((category, categoryIndex) => (
              <CategorySection
                key={category.id}
                category={category}
                categoryIndex={categoryIndex}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
