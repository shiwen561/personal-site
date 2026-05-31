// AIGC 设计师方向
export const aigcData = {
  key: 'aigc',
  title: 'AIGC 设计师',
  subtitle: 'AI-Generated Content Designer',
  tagline: '工业化 AI 视觉管线 · 从随机生成到稳定商业交付',
  accentColor: '#a855f7', // 紫色
  coreCompetencies: [
    {
      title: 'AIGC 工业化管线搭建',
      description:
        '通过高级提示词（Prompt）设计和变量约束，将 AI 图像生成从离散的随机尝试转化为可复用的工业管线，稳定输出商业级视觉资产。',
    },
    {
      title: '角色一致性控制',
      description:
        '深刻理解二次元和游戏美术工作流，掌握角色三视图、表情矩阵和多视角转面的 AI 一致性控制技术，解决跨视角角色特征崩溃问题。',
    },
    {
      title: '多模态 AI 工具链整合',
      description:
        '熟练整合 Claude Code、大语言模型 API 与图像/视频生成模型，搭建自动化工作流，将重复性创意任务从周级压缩至天级。',
    },
  ],
  projects: [
    {
      name: '2D 游戏美术资产与多模态 AIGC 动态分镜生成',
      summary:
        '搭建了串联 Nano Banana 和 Image 2 图像模型的自动化管线，配合 Seedance 2.0 进行视频生成，构建了 2D 废土塔防游戏美术资产的标准化作业流程。',
      highlights: [
        '串联 Nano Banana + Image 2 图像模型的自动化生成管线',
        '基于 Seedance 2.0 实现动态分镜视频生成',
        '将周级完成的美术任务压缩至天数级',
        '建立了可复用的标准化作业流程（SOP）',
      ],
    },
    {
      name: '知名 IP 衍生视觉资产 ——《龙王传说》角色美术',
      summary:
        '基于小说《龙王传说》IP，运用局部重绘和参考图控制技术，解决了不同视角下角色面部特征崩溃的问题，并利用 Seedance 2.0 生成动态分镜。',
      highlights: [
        '运用局部重绘（Inpainting）实现跨视角角色一致性',
        '参考图控制技术解决角色特征漂移',
        'Seedance 2.0 动态分镜呈现故事感',
        '将美术概念试错周期压缩至天级',
      ],
    },
  ],
};
