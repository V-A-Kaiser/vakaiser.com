<script lang="ts">
  let tech = [
    'Typescript',
    'BASH',
    'HTML',
    'CSS',
    'JSON',
    'YAML',
    'React',
    'Svelte',
    'AWS',
    'GCP',
    'Kubernetes',
    'Terraform',
    'GitHub Actions',
    'Helm',
    'Docker',
    'NodeJS',
    'Git'
  ];
</script>

<div class="text-slate-900 bg-slate-100 h-[11in] w-[8.5in] z-10 flex flex-col justify-between">
  <!-- Title and Contact Information -->
  <div class="text-center p-4 bg-slate-900 text-slate-100 text-4xl font-thin font-title">
    VALERIE KAISER
  </div>

  <!-- Experience -->
  <div class="p-8 pb-0 mt-auto">
    <h1 class="font-bold border-b border-black">EXPERIENCE</h1>

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

      <ul class="list-disc ms-8 mb-4">
        <li>
          Designed and implemented an IaC solution for managing the shared dependencies of 15+ (and
          growing) Kubernetes clusters via Helm, Terraform, and GitHub Actions.
        </li>
        <li>
          Refactored the deployment process for microservices across the organization via
          centralized Helm charts, abstracted GitHub Action workflows, and Terraform.
        </li>
        <li>
          Established CI/CD pipelines and a robust deployment process for the Brand Console via
          Docker, Kubernetes, Helm and GitHub Actions.
        </li>
        <li>
          Served as an evangelist for Cart's CloudOps practice through cross team collaboration and
          problem solving.
        </li>
        <li>
          Migrated repositories, pipelines, and teams over to GitHub from GitLab and BitBucket.
        </li>
        <li>Integrated pipeline status announcements with the company Slack.</li>
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
      </ul>
    </div>

    <!-- AGS -->
    <div>
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
  </div>

  <!-- Education -->
  <div class="p-8 pb-0 mt-auto">
    <h1 class="font-bold border-b border-black">EDUCATION</h1>
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
  <div class="p-8 pt-4">
    <h1 class="font-bold border-b border-black">TECHNOLOGIES</h1>
    <div class="flex gap-x-2 flex-wrap justify-center">
      {#each tech as tech}
        <span>
          {tech}
        </span>
      {/each}
    </div>
  </div>
</div>
