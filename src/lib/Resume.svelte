<div class="text-gray-900 bg-white h-[11in] w-[8.5in] z-10 flex flex-col shadow-lg">
  <!-- Title and Contact Information -->
  <div class="text-center p-4 bg-gray-900 text-white font-title">
    <div class="text-4xl font-thin italic tracking-wider">
      VALERIE <span class="font-bold">KAISER</span>
    </div>
    <div class="flex justify-center gap-4 text-sm mt-2">
      <div>resume@vakaiser.com</div>
      <div>✦</div>
      <div>linkedin.com/in/vakaiser</div>
    </div>
  </div>

  <div class="flex flex-col justify-between flex-1 pb-8 pt-4 px-8">
    <!-- Experience -->
    <div>
      <h1 class="text-lg border-b border-black font-title font-bold mb-2">EXPERIENCE</h1>

      <!-- Cart.com -->
      <div class="mb-4">
        <div class="font-bold flex justify-between text-lg">
          <p>Cart.com</p>
          <p>February 2021 &mdash; Present</p>
        </div>

        <div class="italic flex justify-between my-2">
          <p>CloudOps Engineer</p>
          <p>January 2022 &mdash; Present</p>
        </div>

        <ul class="list-disc ms-8 mb-2">
          <li>
            Designed and implemented an declarative IaC solution for managing the shared
            dependencies of 15+ Kubernetes clusters in GCP and AWS via Helm, Terraform, and GitHub
            Actions.
          </li>
          <li>
            Refactored the Kubernetes deployment process for microservices across the organization
            via centralized Helm charts, reusable GitHub Action workflows, and Terraform.
          </li>
          <li>
            Worked alongside development teams to address a variety of issues with networking, code
            deployment, environment management, cloud infrastructure, and Kubernetes.
          </li>
          <li>
            Worked alongside the SecOps team to address token leaks in source code and implement
            security tooling in clusters.
          </li>
          <li>
            Served as an evangelist for the CloudOps team and led weekly "Lunch and Learn" knowledge
            transfer sessions.
          </li>
        </ul>

        <div class="italic flex justify-between mb-2">
          <p>Frontend Engineer</p>
          <p>February 2021 &mdash; January 2022</p>
        </div>

        <ul class="list-disc ms-8">
          <li>
            Built the first 3 iterations of the Cart.com Brand Console front-end using Auth0,
            React.js, Tailwind, GraphQL, and Typescript.
          </li>
          <li>
            Established CI/CD pipelines and a robust deployment process for the Brand Console via
            Docker, Kubernetes, Helm and GitHub Actions.
          </li>
        </ul>
      </div>

      <!-- AGS -->
      <div>
        <div class="font-bold flex justify-between text-lg">
          <p>AGS, LLC</p>
          <p>January 2018 &mdash; February 2021</p>
        </div>

        <div class="italic my-2">
          <p>Software Engineer</p>
        </div>

        <ul class="list-disc ms-8">
          <li>
            Addressed a litany of DevOps issues involving SVN, custom tool chains, and proprietary
            hardware.
          </li>
          <li>Sole software engineer for the 10 video slot games below:</li>
        </ul>

        <div class="grid grid-cols-5 mx-8 text-center italic">
          <div>Pharaoh Sun</div>
          <div>Wild Tiki</div>
          <div>Dragon Blast</div>
          <div>Freedom 7</div>
          <div>8 Riches</div>
          <div>Shining Dragon</div>
          <div>Burning Tiger</div>
          <div>Bao Bei Cash</div>
          <div>Temple Cash</div>
          <div>Lightning Wheel</div>
        </div>
      </div>
    </div>

    <!-- Education -->
    <div>
      <h1 class="text-lg border-b border-black font-title font-bold mb-2">EDUCATION</h1>
      <div class="flex justify-between">
        <p>Lamar University</p>
        <p>Beaumont, TX</p>
      </div>
      <div class="flex justify-between">
        <p>B.S. Computer Science (Cum Laude)</p>
        <p>August 2013 &mdash; December 2016</p>
      </div>
    </div>

    <!-- Skills -->
    <div>
      <h1 class="text-lg border-b border-black font-title font-bold mb-2">TECHNOLOGIES</h1>
      <div class="flex gap-x-2 flex-wrap justify-center">
        {#each ['Typescript', 'Python', 'BASH', 'HTML', 'CSS', 'JSON', 'YAML', 'React', 'Svelte', 'AWS', 'GCP', 'Kubernetes', 'Terraform', 'GitHub Actions', 'Helm', 'Docker', 'NodeJS', 'Git', 'Subversion (SVN)'] as tech}
          <span>
            {tech}
          </span>
        {/each}
      </div>
    </div>
  </div>
</div>
