import React from "react";

import Layout from "@theme/Layout";

import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";

import versions from "../../versions.json";

function Version() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  const latestVersion = versions[0];
  const pastVersions = versions.filter((version) => version !== latestVersion);
  const repoUrl = `https://github.com/${siteConfig.organizationName}/${siteConfig.projectName}`;
  return (
    <Layout
      title="Versions"
      permalink="/versions"
      description="Kalm Versions page listing all documented site versions"
    >
      <main className="container margin-vert--lg">
        <h1>Kalm documentation versions</h1>
        <div className="margin-bottom--lg">
          <h3 id="latest">Latest version (Stable)</h3>
          <p>Here you can find the latest documentation.</p>
          <table>
            <tbody>
              <tr>
                <th>{latestVersion}</th>
                <td>
                  <Link to={useBaseUrl("/docs")}>Documentation</Link>
                </td>
                <td>
                  <a
                    href={`${repoUrl}/releases/tag/${latestVersion}`}
                    target="_blank"
                    rel="noreferrer noreferrer"
                  >
                    Release Notes
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="margin-bottom--lg">
          <h3 id="next">Next version (Unreleased)</h3>
          <p>Here you can find the documentation for unreleased version.</p>
          <table>
            <tbody>
              <tr>
                <th>master</th>
                <td>
                  <Link to={useBaseUrl("/docs/next")}>Documentation</Link>
                </td>
                <td>
                  <a href={repoUrl}>Source Code</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {pastVersions.length > 0 && (
          <div className="margin-bottom--lg">
            <h3 id="archive">Past Versions</h3>
            <p>
              Here you can find documentation for previous versions of Kalm.
            </p>
            <table>
              <tbody>
                {pastVersions.map((version) => (
                  <tr key={version}>
                    <th>{version}</th>
                    <td>
                      <Link to={useBaseUrl(`/docs/${version}`)}>
                        Documentation
                      </Link>
                    </td>
                    <td>
                      <a href={`${repoUrl}/releases/tag/v${version}`}>
                        Release Notes
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </main>
    </Layout>
  );
}

export default Version;
