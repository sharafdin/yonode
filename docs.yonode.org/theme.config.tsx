import { useRouter } from "next/router";
import { DocsThemeConfig, useConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  head: () => {
    const { asPath, defaultLocale, locale } = useRouter();
    const { frontMatter } = useConfig();
    const url =
      "https://docs.yonode.org" +
      (defaultLocale === locale ? asPath : `/${locale}${asPath}`);

    return (
      <>
        <meta property="og:url" content={url} />
        <meta property="og:title" content={frontMatter.title || "Yonode"} />
        <meta
          property="og:description"
          content={
            frontMatter.description ||
            "The Node.js Toolkit for Rapid Development."
          }
        />
      </>
    );
  },
  useNextSeoProps() {
    const { asPath } = useRouter()
    if (asPath !== '/') {
      return {
        titleTemplate: '%s | Yonode'
      }
    }else{
      return {
        titleTemplate: 'Yonode'
      }
    }
  },
  banner: {
    key: "v0.5.5-beta",
    text: (
      <a href="https://github.com/sharafdin/yonode/releases" target="_blank">
        Yonode will launch on Mar 11, 2024.
      </a>
    ),
  },
  logo: "Yonode",
  logoLink: "http://yonode.org",
  project: {
    link: "https://github.com/sharafdin/yonode",
  },
  chat: {
    link: "https://discord.gg/GFUK9rS9",
  },
  docsRepositoryBase: "https://github.com/sharafdin/docs.yonode.org/blob/main",
  feedback: {
    content: "Question? Give us feedback →",
    labels: "Feedback",
  },
  editLink: {
    text: "Edit this page on GitHub",
  },
  footer: {
    text: (
      <span>
        MIT {new Date().getFullYear()} ©{" "}
        <a href="https://sharafdin.com" target="_blank">
          Sharafdin
        </a>
        .
      </span>
    ),
  },
};

export default config;
