import { useRouter } from "next/router";

export default function PortfolioProjectPage() {
  const router = useRouter();

  //exposed various pieces values encoded in the url like "/something or the object you get back"

  return (
    <div>
      <h1>The Portfolio Project Page</h1>
    </div>
  );
}
