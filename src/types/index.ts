export type Pillar = {
  title: string;
  description: string;
  dtsu: string;
};

export type PillarCardMeta = Pillar & {
  src: string;
  path: string;
  className: string;
};
