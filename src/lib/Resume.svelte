<div class="text-slate-800 bg-white h-[11in] w-[8.5in] z-10 flex flex-col shadow-lg">
  <!-- Title and Contact Information -->
  <div class="text-center p-4 bg-gradient-to-b from-indigo-950 to-gray-900 text-slate-100 font-title">
    <div class="text-4xl font-thin">VALERIE KAISER</div>
    <div class="flex justify-center gap-4 text-sm mt-2">
      <div>206 - 650 - 5259</div>
      <div>✦</div>
      <div>resume@vakaiser.com</div>
      <div>✦</div>
      <div>linkedin.com/in/vakaiser</div>
    </div>
  </div>

  <!-- Experience -->
  <div class="px-8 mt-4">
    <h1 class="text-lg border-b border-black font-title font-bold mb-2">EXPERIENCE</h1>

    <!-- Cart.com -->
    <div class="mb-4">
      <div class="font-bold flex justify-between">
        <p>Cart.com</p>
        <p>February 2021 &mdash; Present</p>
      </div>

      <div class="italic flex justify-between">
        <p>CloudOps Engineer</p>
        <p>January 2022 &mdash; Present</p>
      </div>

      <ul class="list-disc ms-8 mb-2">
        <li>
          Designed and implemented an IaC solution for managing the shared dependencies of 15+ (and
          growing) Kubernetes clusters in GCP and AWS via Helm, Terraform, and GitHub Actions.
        </li>
        <li>
          Refactored the deployment process for microservices across the organization via
          centralized Helm charts, abstracted GitHub Action workflows, and Terraform.
        </li>
        <li>
          Served as an evangelist for Cart's CloudOps practice through cross team collaboration and
          problem solving.
        </li>
        <li>
          Migrated repositories, pipelines, and teams over to GitHub from GitLab and BitBucket.
        </li>
        <li>Created a Slack bot to announce pipeline updates.</li>
      </ul>

      <div class="italic flex justify-between">
        <p>Frontend Engineer</p>
        <p>February 2021 &mdash; January 2022</p>
      </div>

      <ul class="list-disc ms-8">
        <li>
          Built the first 3 iterations of the Cart.com Brand Console front-end using React.js,
          Typescript, and GraphQL.
        </li>
        <li>
          Established CI/CD pipelines and a robust deployment process for the Brand Console via
          Docker, Kubernetes, Helm and GitHub Actions.
        </li>
      </ul>
    </div>

    <!-- AGS -->
    <div class="mb-4">
      <div class="font-bold flex justify-between">
        <p>AGS, LLC</p>
        <p>January 2018 &mdash; February 2021</p>
      </div>

      <div class="italic">
        <p>Software Engineer</p>
      </div>

      <ul class="list-disc ms-8">
        <li>Addressed a litany of DevOps issues involving proprietary tool chains and hardware.</li>
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

    <!-- NASA Subcontract -->
    <div>
      <div class="font-bold flex justify-between">
        <p>NASA</p>
        <p>May 2017 &mdash; January 2018</p>
      </div>

      <div class="italic">
        <p>Software Engineer (Contract)</p>
      </div>

      <ul class="list-disc ms-8">
        <li>
          Small miscellaneous open source contributions to NASA's Trick Simulation Environment.
          <br />
          (https://github.com/nasa/trick)
        </li>
      </ul>
    </div>
  </div>

  <!-- Education -->
  <div class="px-8 my-auto">
    <h1 class="text-lg border-b border-black font-title font-bold mb-2">EDUCATION</h1>
    <div class="flex justify-between">
      <p>Lamar University</p>
      <p>Beaumont, TX</p>
    </div>
    <div class="flex justify-between">
      <p>B.S. Computer Science</p>
      <p>August 2013 &mdash; December 2016</p>
    </div>
    <div class="flex justify-between">
      <p>Cum Laude</p>
      <p>3.66 GPA</p>
    </div>
  </div>

  <!-- Skills -->
  <div class="px-8 mb-8">
    <h1 class="text-lg border-b border-black font-title font-bold mb-2">TECHNOLOGIES</h1>
    <div class="flex gap-x-2 flex-wrap justify-center">
      {#each ['Typescript', 'BASH', 'HTML', 'CSS', 'JSON', 'YAML', 'React', 'Svelte', 'AWS', 'GCP', 'Kubernetes', 'Terraform', 'GitHub Actions', 'Helm', 'Docker', 'NodeJS', 'Git'] as tech}
        <span>
          {tech}
        </span>
      {/each}
    </div>
  </div>
</div>
