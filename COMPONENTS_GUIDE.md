# 🎨 组件使用指南

本指南详细介绍项目中所有21st.dev组件的使用方法和最佳实践。

## 📑 目录

- [导航组件](#导航组件)
- [Hero组件](#hero组件)
- [卡片组件](#卡片组件)
- [交互组件](#交互组件)
- [展示组件](#展示组件)
- [布局组件](#布局组件)

---

## 导航组件

### TubelightNavbar

发光导航栏，带有流畅的悬停效果。

**使用示例：**
```tsx
import { TubelightNavbar } from '@/components/ui/tubelight-navbar';

const navItems = [
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'FAQ', href: '/faq' },
];

<TubelightNavbar 
  items={navItems} 
  logo="YourLogo" 
/>
```

**Props:**
- `items`: NavItem[] - 导航项数组
- `logo`: string - Logo文本（可选）

**特性:**
- ✨ 悬停时高亮效果
- 📱 响应式设计
- 🎨 玻璃拟态背景
- 🔝 固定在顶部

---

### FloatingActionMenu

浮动操作菜单，支持展开多个子菜单项。

**使用示例：**
```tsx
import { FloatingActionMenu } from '@/components/ui/floating-action-menu';

<FloatingActionMenu />
```

**特性:**
- 🎯 固定右下角
- 💫 展开/收起动画
- 🔘 可自定义操作项
- 📱 移动端友好

**自定义操作：**
```tsx
// 在组件内修改 actions 数组
const actions = [
  {
    icon: <MessageCircle className="w-5 h-5" />,
    label: 'Chat',
    onClick: () => console.log('Chat clicked'),
  },
  // 添加更多操作...
];
```

---

## Hero组件

### GlowingEffect

为文字或元素添加发光效果。

**使用示例：**
```tsx
import { GlowingEffect } from '@/components/ui/glowing-effect';

<GlowingEffect color="#3b82f6" intensity={30}>
  <h1>Your Amazing Title</h1>
</GlowingEffect>
```

**Props:**
- `children`: ReactNode - 子元素
- `color`: string - 发光颜色（默认：'#ffffff'）
- `intensity`: number - 发光强度（默认：20）
- `className`: string - 额外样式类

**最佳实践：**
- 用于主标题和重要CTA
- 强度建议 20-40
- 避免过度使用

---

### EtheralShadow

动态阴影背景效果。

**使用示例：**
```tsx
import { EtheralShadow } from '@/components/ui/etheral-shadow';

<EtheralShadow
  color="rgba(59, 130, 246, 1)"
  animation={{ scale: 50, speed: 50 }}
  noise={{ opacity: 0.5, scale: 1 }}
  sizing="fill"
/>
```

**Props:**
- `sizing`: 'fill' | 'stretch' - 填充方式
- `color`: string - 阴影颜色
- `animation`: AnimationConfig - 动画配置
- `noise`: NoiseConfig - 噪点配置
- `className`: string - 额外样式类

**动画配置：**
```typescript
animation={{
  scale: 1-100,    // 动画幅度
  speed: 1-100,    // 动画速度
}}
```

---

## 卡片组件

### AnimatedGlowCard

带发光效果的动画卡片。

**使用示例：**
```tsx
import { AnimatedGlowCard } from '@/components/ui/animated-glow-card';

<AnimatedGlowCard glowColor="#3b82f6">
  <h3>Feature Title</h3>
  <p>Feature description...</p>
</AnimatedGlowCard>
```

**Props:**
- `children`: ReactNode - 卡片内容
- `glowColor`: string - 发光颜色（默认：'#3b82f6'）
- `className`: string - 额外样式类

**特性:**
- 🎨 玻璃拟态背景
- ✨ 悬停发光效果
- 📜 滚动触发动画
- 🎭 平滑过渡

---

### AnimatedCardsStack

3D堆叠卡片效果。

**使用示例：**
```tsx
import { AnimatedCardsStack } from '@/components/ui/animated-cards-stack';

<AnimatedCardsStack
  cards={[
    {
      title: 'Card 1',
      description: 'Description...',
      icon: <YourIcon />,
    },
    // 更多卡片...
  ]}
/>
```

**Props:**
- `cards`: CardData[] - 卡片数据数组
- `className`: string - 额外样式类

**CardData接口：**
```typescript
interface CardData {
  title: string;
  description: string;
  icon?: ReactNode;
}
```

**最佳实践：**
- 建议3-4张卡片
- 每张卡片内容简洁
- 图标可选但推荐使用

---

## 交互组件

### LiquidGlassButton

玻璃拟态按钮，带流体动画效果。

**使用示例：**
```tsx
import { LiquidGlassButton } from '@/components/ui/liquid-glass-button';

<LiquidGlassButton 
  variant="primary"
  onClick={() => console.log('clicked')}
>
  Get Started
</LiquidGlassButton>
```

**Props:**
- `children`: ReactNode - 按钮文本
- `onClick`: () => void - 点击事件
- `variant`: 'primary' | 'secondary' - 按钮样式
- `className`: string - 额外样式类

**变体说明：**
- `primary`: 主要操作（白色背景）
- `secondary`: 次要操作（透明背景）

---

### FAQ

折叠式FAQ组件。

**使用示例：**
```tsx
import { FAQ } from '@/components/ui/faq';

<FAQ
  items={[
    {
      question: 'What is this?',
      answer: 'This is an answer...',
    },
    // 更多问题...
  ]}
/>
```

**Props:**
- `items`: FAQItem[] - FAQ项数组

**FAQItem接口：**
```typescript
interface FAQItem {
  question: string;
  answer: string;
}
```

**特性:**
- 🎬 平滑展开/收起动画
- 🎨 玻璃拟态背景
- 📱 移动端友好
- ⚡ 一次只展开一个

---

## 展示组件

### AnimatedTestimonials

自动轮播的用户评价组件。

**使用示例：**
```tsx
import { AnimatedTestimonials } from '@/components/ui/animated-testimonials';

<AnimatedTestimonials
  testimonials={[
    {
      name: 'John Doe',
      role: 'CEO at Company',
      content: 'This is amazing!',
      avatar: 'https://...',
    },
    // 更多评价...
  ]}
  autoPlay={true}
  interval={5000}
/>
```

**Props:**
- `testimonials`: Testimonial[] - 评价数组
- `autoPlay`: boolean - 自动播放（默认：true）
- `interval`: number - 切换间隔ms（默认：5000）

**Testimonial接口：**
```typescript
interface Testimonial {
  name: string;
  role: string;
  content: string;
  avatar?: string;
}
```

---

### VideoThumbnailPlayer

视频缩略图播放器。

**使用示例：**
```tsx
import { VideoThumbnailPlayer } from '@/components/ui/video-thumbnail-player';

<VideoThumbnailPlayer
  thumbnail="https://example.com/thumbnail.jpg"
  videoUrl="https://example.com/video.mp4"
  title="Demo Video"
/>
```

**Props:**
- `thumbnail`: string - 缩略图URL
- `videoUrl`: string - 视频URL（可选）
- `title`: string - 标题（可选）
- `className`: string - 额外样式类

**特性:**
- ▶️ 点击播放
- 🎬 平滑过渡
- 🎨 悬停效果
- 📱 响应式

---

### FeatureWithImageComparison

前后对比图片展示。

**使用示例：**
```tsx
import { FeatureWithImageComparison } from '@/components/ui/feature-with-image-comparison';

<FeatureWithImageComparison
  beforeImage="https://example.com/before.jpg"
  afterImage="https://example.com/after.jpg"
  title="See the Difference"
/>
```

**Props:**
- `beforeImage`: string - 前图URL
- `afterImage`: string - 后图URL
- `title`: string - 标题（可选）
- `className`: string - 额外样式类

**交互：**
- 🖱️ 鼠标拖动滑块
- 👆 触摸拖动支持
- 📍 位置保持

---

### Pricing

定价卡片组件。

**使用示例：**
```tsx
import { Pricing } from '@/components/ui/pricing';

<Pricing
  tiers={[
    {
      name: 'Starter',
      price: '$0',
      period: 'month',
      description: 'For individuals',
      features: [
        { text: '5 Projects', included: true },
        { text: 'Advanced Features', included: false },
      ],
      highlighted: false,
    },
    // 更多方案...
  ]}
/>
```

**Props:**
- `tiers`: PricingTier[] - 定价方案数组

**PricingTier接口：**
```typescript
interface PricingTier {
  name: string;
  price: string;
  period: string;
  description: string;
  features: PricingFeature[];
  highlighted?: boolean;
}

interface PricingFeature {
  text: string;
  included: boolean;
}
```

**最佳实践：**
- 建议3个方案
- 中间方案设为highlighted
- 功能列表对齐

---

### AvatarCircles

用户头像圆圈展示。

**使用示例：**
```tsx
import { AvatarCircles } from '@/components/ui/avatar-circles';

<AvatarCircles
  avatars={[
    'https://example.com/avatar1.jpg',
    'https://example.com/avatar2.jpg',
    'JD', // 或使用文字
  ]}
/>
```

**Props:**
- `avatars`: string[] - 头像URL或文字数组
- `className`: string - 额外样式类

**特性:**
- 🔄 自动堆叠
- 🎨 渐变背景（文字模式）
- 📱 响应式大小
- 🖼️ 支持图片和文字

---

## 布局组件

### ContainerScrollAnimation

滚动触发的容器动画。

**使用示例：**
```tsx
import { ContainerScrollAnimation } from '@/components/ui/container-scroll-animation';

<ContainerScrollAnimation>
  <YourContent />
</ContainerScrollAnimation>
```

**Props:**
- `children`: ReactNode - 子元素
- `className`: string - 额外样式类

**特性:**
- 📜 滚动触发
- 🎭 淡入+移动动画
- 🔄 视差效果
- ⚡ 性能优化

**最佳实践：**
- 包裹重要内容区块
- 不要嵌套使用
- 适合大型元素

---

## 🎨 全局样式类

### 玻璃拟态
```css
.glass          /* 基础玻璃效果 */
.glass-strong   /* 增强玻璃效果 */
.glass-dark     /* 深色玻璃效果 */
```

### 发光效果
```css
.glow-blue      /* 蓝色光晕 */
.glow-purple    /* 紫色光晕 */
.glow-gradient  /* 渐变光晕 */
```

### 动画
```css
.animate-float        /* 浮动动画 */
.animate-pulse-glow   /* 脉冲发光 */
.animated-gradient    /* 背景渐变 */
```

### 文字效果
```css
.text-gradient   /* 渐变文字 */
.shine          /* 闪光效果 */
```

---

## 💡 组合使用示例

### Hero区块
```tsx
<section className="relative min-h-screen">
  <GlowingEffect color="#3b82f6" intensity={30}>
    <h1 className="text-6xl font-bold text-gradient">
      Your Amazing Product
    </h1>
  </GlowingEffect>
  
  <div className="flex gap-4 mt-8">
    <LiquidGlassButton variant="primary">
      Get Started
    </LiquidGlassButton>
    <LiquidGlassButton variant="secondary">
      Learn More
    </LiquidGlassButton>
  </div>
  
  <AvatarCircles avatars={['A', 'B', 'C']} />
</section>
```

### 功能展示区
```tsx
<section className="py-20">
  <div className="grid grid-cols-3 gap-8">
    <ContainerScrollAnimation>
      <AnimatedGlowCard glowColor="#3b82f6">
        <Icon />
        <h3>Feature 1</h3>
        <p>Description...</p>
      </AnimatedGlowCard>
    </ContainerScrollAnimation>
    {/* 更多卡片... */}
  </div>
</section>
```

### 评价区块
```tsx
<section className="py-20">
  <h2 className="text-4xl font-bold mb-12">
    What Our Users Say
  </h2>
  <AnimatedTestimonials
    testimonials={testimonials}
    autoPlay={true}
  />
</section>
```

---

## 🎯 性能优化建议

1. **懒加载组件**
```tsx
import dynamic from 'next/dynamic';

const HeavyComponent = dynamic(
  () => import('@/components/ui/heavy-component'),
  { loading: () => <p>Loading...</p> }
);
```

2. **条件渲染动画**
```tsx
const shouldAnimate = useInView(ref, { once: true });

<AnimatedComponent animate={shouldAnimate} />
```

3. **减少重渲染**
```tsx
import { memo } from 'react';

export const MyComponent = memo(({ data }) => {
  // 组件逻辑
});
```

---

## 🐛 常见问题

### Q: 动画不流畅？
A: 确保使用了 `will-change` 或 `transform` 进行GPU加速。

### Q: 玻璃效果不显示？
A: 检查父元素是否有背景，玻璃效果需要背后有内容。

### Q: 组件样式冲突？
A: 使用 `className` prop覆盖默认样式，或调整Tailwind配置。

---

## 📚 更多资源

- [Framer Motion文档](https://www.framer.com/motion/)
- [Tailwind CSS文档](https://tailwindcss.com/docs)
- [Next.js文档](https://nextjs.org/docs)
- [21st.dev](https://21st.dev/)

---

**提示**: 所有组件都支持TypeScript，IDE会提供智能提示！

**Happy Coding! 🎨**

