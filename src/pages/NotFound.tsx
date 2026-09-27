import { Link } from "react-router-dom";
import { PageHead } from "@/components/seo/PageHead";
import { pageSeo } from "@/components/seo/pageSeo";

const NotFound = () => {
  const seo = pageSeo.notFound;

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <PageHead
        title={seo.title}
        description={seo.description}
        path={seo.path}
        noIndex
      />
      <div className="text-center px-4">
        <h1 className="font-cinzel text-4xl font-bold text-primary mb-4">404</h1>
        <p className="text-xl text-foreground mb-6">Page not found</p>
        <Link to="/" className="text-primary hover:text-primary/80 underline font-medium">
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
