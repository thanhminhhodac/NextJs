export interface blogPost {
  id: number;
  attributes: {
    title: string;
    description: string;
    content: string;
    slug?: string;
  };
}
