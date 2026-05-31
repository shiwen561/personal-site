// AI 产品经理方向
export const pmData = {
  key: 'pm',
  title: 'AI 产品经理',
  subtitle: 'AI Product Manager',
  tagline: '极速 MVP · Agent 架构 · 从需求到交付全闭环',
  accentColor: '#3b82f6', // 蓝色
  coreCompetencies: [
    {
      title: '极速 MVP 验证与规范开发（SDD）',
      description:
        '使用 Claude Code 和 Trae 挂载 DeepSeek API，覆盖 PRD、原型、编码和测试的完整生命周期，从需求到调试交付实现端到端闭环，5 天内完成完整产品。',
    },
    {
      title: '智能体架构与 Workflow 编排',
      description:
        '熟练使用 Coze 框架，基于 RAG 搭建商业级智能体（Agent），将多模态大模型封装为可视化工作流，实现 AI 能力的模块化调度与编排。',
    },
    {
      title: '业务解构与人机协同纠偏',
      description:
        '会计学背景赋予我拆解复杂业务规则的能力，擅长将税法等行业知识降维为产品功能，通过结构化提示词工程确保 AI 输出精准可控。',
    },
  ],
  projects: [
    {
      name: '基于大模型的个人智能记账分析系统',
      summary:
        '使用 Claude Code 挂载 DeepSeek-v4Pro API，在 5 天内独立完成从需求分析到交付的全流程。实现了 Android 通知监听、微信/支付宝账单自动导入、CRUD 记账与多维财务可视化看板。',
      highlights: [
        '5 天独立完成全栈产品交付（Web/App）',
        'Android 通知监听 + 微信/支付宝账单自动抓取',
        'CRUD 记账 + 多维财务可视化看板',
        'PRD → 原型 → 编码 → 测试全周期闭环',
      ],
    },
    {
      name: '2D 游戏美术资产与多模态 AIGC 动态分镜生成',
      summary:
        '使用 Coze Workflow 编排，串联 Nano Banana 和 Image 2 图像模型，基于《龙王传说》IP 制作角色资产，通过 Seedance 2.0 进行动态分镜。将美术概念试错周期压缩至天级。',
      highlights: [
        'Coze Workflow 多模型编排与调度',
        'Nano Banana + Image 2 串联的自动化管线',
        'IP 衍生角色资产的一致性控制',
        'Seedance 2.0 动态分镜 + 概念试错天级闭环',
      ],
    },
  ],
};
