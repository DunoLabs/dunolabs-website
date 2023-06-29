import Head from "next/head";
import WebsiteIcon from "./website-icon";

interface SEOProps extends React.MetaHTMLAttributes<HTMLMetaElement> {
  title?: string;
  description?: string;
  keywords?: string[];
}

const SEO: React.FC<SEOProps> = ({ 
  title="Dunolabs", 
  description="we're building the next generation's micro-saas tools, websites & products.", 
  keywords=["indore", "web-design", "frontend", "user-experience", "design", "dunolabs", "sass", "products"]
}) => {
  return (
    <Head>
      <title>{title}</title>
      <WebsiteIcon />
      <meta name="title" content={title} />
      <meta name="description" content={description} />

      <meta property="og:type" content="website" />
      <meta property="og:description" content={description} />
    </Head>
  )
};

export default SEO;