export interface BoardTheme {
  id: string;
  name: string;
  isLight?: boolean;
  tileEven: string;
  tileOdd: string;
  tileBorder: string;
  arenaBg: string;
  frameGradient: string;
  frameBorder: string;
  shadowColor: string;
  accentHue: string;
  accentTitle: string;
}

// All Adventure mode stages are played on clean, crisp white tiles
export const ADVENTURE_WHITE_THEME: BoardTheme = {
  id: 'marble_white',
  name: 'Beyaz Parkur',
  isLight: true,
  tileEven: '#ffffff',
  tileOdd: '#f1f5f9',
  tileBorder: '#cbd5e1',
  arenaBg: '#e2e8f0',
  frameGradient: 'from-slate-100 via-slate-200 to-slate-300',
  frameBorder: '#94a3b8',
  shadowColor: 'rgba(148, 163, 184, 0.45)',
  accentHue: '#0ea5e9',
  accentTitle: 'Açık Beyaz Parkur',
};

export const DEFAULT_CLASSIC_THEME: BoardTheme = {
  id: 'classic',
  name: 'Gece Arenası',
  tileEven: '#1a2234',
  tileOdd: '#151b2a',
  tileBorder: '#334155',
  arenaBg: '#0f1422',
  frameGradient: 'from-slate-800 via-slate-900 to-[#0b0e18]',
  frameBorder: '#475569',
  shadowColor: 'rgba(0, 0, 0, 0.8)',
  accentHue: '#6366f1',
  accentTitle: 'Klasik Arena',
};

export const ADVENTURE_THEMES: BoardTheme[] = [ADVENTURE_WHITE_THEME];

export const getThemeForStage = (_stage: number): BoardTheme => {
  // Always use the stage 1 crisp white marble tile theme for all adventure stages
  return ADVENTURE_WHITE_THEME;
};
