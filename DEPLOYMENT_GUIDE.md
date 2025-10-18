# 🚀 Vercel部署指南

## 前置条件

1. ✅ GitHub/GitLab/Bitbucket 账号
2. ✅ [Vercel](https://vercel.com) 账号（可以用GitHub登录）
3. ✅ 项目代码推送到Git仓库

## 📝 部署步骤

### 方式一：通过Vercel Dashboard（推荐）

#### 1. 推送代码到GitHub

```bash
# 初始化Git仓库（如果还没有）
cd modern-website
git init

# 添加所有文件
git add .

# 提交
git commit -m "Initial commit: Modern website with 21st.dev components"

# 添加远程仓库（替换为你的仓库地址）
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git

# 推送到GitHub
git push -u origin main
```

#### 2. 导入到Vercel

1. 访问 [vercel.com](https://vercel.com)
2. 点击 "New Project"
3. 从GitHub导入你的仓库
4. Vercel会自动检测到Next.js项目

#### 3. 配置项目

Vercel会自动配置以下内容：
- ✅ Framework: Next.js
- ✅ Build Command: `npm run build`
- ✅ Output Directory: `.next`
- ✅ Install Command: `npm install`

**无需手动配置！直接点击 "Deploy"**

#### 4. 等待部署完成

- 首次部署通常需要 1-2 分钟
- 部署完成后，你会得到一个 `.vercel.app` 域名
- 例如：`modern-website-xxx.vercel.app`

#### 5. 访问网站

点击 Vercel 提供的链接，即可访问你的网站！

### 方式二：通过Vercel CLI

```bash
# 安装Vercel CLI
npm i -g vercel

# 登录
vercel login

# 部署
cd modern-website
vercel

# 按照提示操作
# - Set up and deploy? Yes
# - Which scope? 选择你的账号
# - Link to existing project? No
# - Project name? modern-website
# - Directory? ./
# - Override settings? No

# 部署到生产环境
vercel --prod
```

## 🌐 自定义域名

### 添加自己的域名

1. 在Vercel Dashboard中，进入项目设置
2. 点击 "Domains"
3. 添加你的域名（例如：`www.yourdomain.com`）
4. 按照指示配置DNS记录：

```
Type: CNAME
Name: www (或 @)
Value: cname.vercel-dns.com
```

5. 等待DNS传播（通常 5-30 分钟）
6. Vercel会自动配置HTTPS（免费SSL证书）

## 🔄 自动部署

每次推送到GitHub的main分支时，Vercel会自动：
- 构建新版本
- 运行测试（如果有）
- 部署到生产环境
- 生成部署预览

### 预览部署

- 每个Pull Request都会自动生成预览链接
- 在合并前可以测试更改
- 完美的团队协作流程

## ⚙️ 环境变量

如果你需要环境变量：

1. 进入项目设置
2. 点击 "Environment Variables"
3. 添加变量：
   - `NEXT_PUBLIC_API_URL`
   - `DATABASE_URL`
   - 等等...

4. 选择环境：
   - Production
   - Preview
   - Development

## 📊 性能监控

Vercel自动提供：
- ✅ Analytics（访问统计）
- ✅ Speed Insights（性能分析）
- ✅ Web Vitals（核心指标）

在项目Dashboard中查看详细数据。

## 🔧 高级配置

### 自定义构建设置

在 `vercel.json` 中（已配置）：

```json
{
  "buildCommand": "npm run build",
  "framework": "nextjs",
  "regions": ["sin1", "hnd1", "sfo1"],
  "headers": [...]
}
```

### 重定向和重写

在 `next.config.ts` 中添加：

```typescript
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/old-page',
        destination: '/new-page',
        permanent: true,
      },
    ]
  },
}
```

## 🐛 故障排查

### 构建失败

1. **检查本地构建**
   ```bash
   npm run build
   ```
   确保本地可以成功构建

2. **检查依赖**
   ```bash
   npm install
   ```
   确保所有依赖都已安装

3. **查看构建日志**
   在Vercel Dashboard中查看详细错误信息

### 页面404错误

- 确保文件路径正确
- 检查 `app` 目录结构
- 确保导出了默认组件

### 图片加载失败

- 检查 `next.config.ts` 中的图片域名配置
- 确保外部图片URL可访问

## 📈 性能优化建议

### 已实现
- ✅ 图片优化（Next.js Image）
- ✅ 代码分割
- ✅ CSS压缩
- ✅ Tree shaking
- ✅ 服务端渲染

### 可选优化
1. **添加图片CDN**
2. **启用ISR（增量静态再生成）**
3. **配置缓存策略**
4. **使用Web Workers**

## 🔒 安全最佳实践

已配置的安全头：
- ✅ X-Content-Type-Options
- ✅ X-Frame-Options
- ✅ X-XSS-Protection
- ✅ Referrer-Policy
- ✅ 自动HTTPS

## 📱 测试清单

部署后测试：
- [ ] 首页加载正常
- [ ] 定价页面可访问
- [ ] FAQ页面可访问
- [ ] 导航菜单工作正常
- [ ] 响应式设计在移动端正常
- [ ] 所有动画流畅运行
- [ ] 图片正常加载
- [ ] 玻璃拟态效果显示正确
- [ ] 表单提交工作（如果有）
- [ ] 链接都可以点击

## 🎉 部署成功！

恭喜！你的现代化网站已经成功部署到Vercel。

### 下一步

1. **分享你的网站**
   - 复制链接分享给朋友
   - 添加到社交媒体简介
   - 提交到搜索引擎

2. **持续优化**
   - 查看Analytics数据
   - 根据用户反馈改进
   - 定期更新内容

3. **扩展功能**
   - 添加博客
   - 集成CMS
   - 添加用户认证
   - 集成支付系统

## 📞 需要帮助？

- [Vercel文档](https://vercel.com/docs)
- [Next.js文档](https://nextjs.org/docs)
- [Vercel Discord](https://vercel.com/discord)
- [GitHub Issues](https://github.com/vercel/next.js/issues)

---

**提示**: 首次部署后，保存你的 `.vercel` 目录到 `.gitignore`，这样团队成员可以独立部署。

**Happy Deploying! 🚀**

