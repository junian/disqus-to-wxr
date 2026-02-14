export interface DisqusThread {
  $: { 'dsq:id': string };
  id?: string[];
  forum?: string[];
  link?: string[];
  title?: string[];
  message?: string[];
  createdAt?: string[];
  author?: Array<{
    name?: string[];
    isAnonymous?: string[];
    username?: string[];
  }>;
  isClosed?: string[];
  isDeleted?: string[];
}

export interface DisqusPost {
  $: { 'dsq:id': string };
  id?: string[];
  message?: string[];
  createdAt?: string[];
  isDeleted?: string[];
  isSpam?: string[];
  author?: Array<{
    name?: string[];
    isAnonymous?: string[];
    username?: string[];
  }>;
  thread?: Array<{ $: { 'dsq:id': string } }>;
  parent?: Array<{ $: { 'dsq:id': string } }>;
}

export interface DisqusData {
  disqus: {
    thread?: DisqusThread[];
    post?: DisqusPost[];
  };
}

export interface WxrOptions {
  title: string;
  url: string;
  description: string;
}
