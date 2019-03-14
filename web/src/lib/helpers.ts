import { format } from 'date-fns';

export function cn(...args: string[]) {
  return args.filter(Boolean).join(' ');
}

export function mapEdgesToNodes<T>(data: { edges: Array<{ node: T }> }): T[] {
  if (!data.edges) return [];
  return data.edges.map(edge => edge.node);
}

export function filterOutDocsWithoutSlugs<T>({
  slug,
}: {
  slug?: { current: T };
}) {
  return slug ? slug.current : undefined;
}

export function getBlogUrl(
  publishedAt: string | number | Date,
  slug: { current: string } | string
) {
  return `/blog/${format(publishedAt, 'YYYY/MM')}/${
    typeof slug === 'string' ? slug : slug.current
  }/`;
}

export function buildImageObj(source: { asset: any; crop: any; hotspot: any }) {
  const imageObj: {
    asset: { _ref: string };
    crop?: any;
    hotspot?: any;
  } = {
    asset: { _ref: source.asset._ref || source.asset._id },
  };

  if (source.crop) imageObj.crop = source.crop;
  if (source.hotspot) imageObj.hotspot = source.hotspot;

  return imageObj;
}
