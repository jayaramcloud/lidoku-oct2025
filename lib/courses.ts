// The Lidoku app (lidoku-turbo). Set NEXT_PUBLIC_APP_URL in Vercel to wherever it is deployed.
export const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? 'https://app.lidoku.com';
export const SIGNUP_URL = `${APP_URL}/auth/signup`;
export const COURSES_URL = `${APP_URL}/courses`;

export type TrackId = 'linux' | 'docker' | 'kubernetes';

export interface Course {
  id: TrackId;
  name: string;
  tagline: string;
  accent: { text: string; border: string; bg: string; ring: string; dot: string };
  labsReady: boolean; // lab machines for this track are live
  machine: string; // what the learner's lab machine has
  sampleCommands: string[];
  overview: string;
  coreSkills: string[];
  advancedTopics: string[];
  modules: { title: string; description: string; duration: string }[];
  prerequisites: string;
  included: string[];
  audience: string[];
  outcomes: string[];
  cta: { title: string; text: string };
}

export const courses: Course[] = [
  {
    id: 'linux',
    name: 'Linux',
    tagline: 'Master Linux system administration from fundamentals to advanced topics. Build the foundation every DevOps engineer needs.',
    accent: {
      text: 'text-emerald-300',
      border: 'hover:border-emerald-500/50',
      bg: 'bg-emerald-500/10',
      ring: 'border-emerald-500/30',
      dot: 'bg-emerald-400',
    },
    labsReady: true,
    machine: 'Ubuntu 24.04 with root access',
    sampleCommands: ['ls -la /etc', 'systemctl list-units --type=service', 'ps aux --sort=-%mem | head'],
    overview:
      "This comprehensive Linux training program takes you from basic command-line operations to advanced system administration. You'll gain hands-on experience with real-world scenarios and best practices used by professional system administrators.",
    coreSkills: [
      'Command-line mastery',
      'File system navigation & management',
      'User & permission management',
      'Process management & monitoring',
      'System services & systemd',
    ],
    advancedTopics: [
      'Shell scripting & automation',
      'Networking & firewall configuration',
      'Package management (apt, yum, dnf)',
      'Security hardening & SELinux',
      'Log analysis & troubleshooting',
    ],
    modules: [
      {
        title: 'Linux Fundamentals',
        description: 'Get started with Linux basics, file system hierarchy, essential commands, and text editors (vim, nano).',
        duration: '2-3 hours',
      },
      {
        title: 'System Administration',
        description: 'Learn user management, file permissions, process control, and system monitoring tools.',
        duration: '3-4 hours',
      },
      {
        title: 'Shell Scripting',
        description: 'Master Bash scripting for automation, including variables, loops, conditionals, and functions.',
        duration: '4-5 hours',
      },
      {
        title: 'Networking & Security',
        description: 'Configure networks, set up firewalls (iptables, firewalld), SSH, and implement security best practices.',
        duration: '3-4 hours',
      },
      {
        title: 'Advanced Topics',
        description: 'Systemd service management, cron jobs, log rotation, backup strategies, and performance tuning.',
        duration: '4-5 hours',
      },
    ],
    prerequisites:
      'No prior Linux experience required. Basic computer literacy and willingness to learn command-line interfaces recommended.',
    included: [
      '16-20 hours of comprehensive video content',
      'Hands-on labs and practical exercises',
      'Downloadable resources and cheat sheets',
      'Real-world project scenarios',
      'Certificate of completion',
    ],
    audience: [
      'Aspiring DevOps engineers',
      'System administrators',
      'Developers moving to cloud infrastructure',
      'IT professionals expanding their skill set',
      'Anyone interested in Linux and open source',
    ],
    outcomes: [
      'Navigate and manage Linux systems confidently',
      'Write shell scripts to automate common tasks',
      'Configure and secure Linux servers',
      'Troubleshoot system issues effectively',
      'Prepare for Linux certification exams (LPIC, RHCSA)',
    ],
    cta: { title: 'Ready to Start?', text: 'Begin your Linux journey today and unlock the power of open source.' },
  },
  {
    id: 'docker',
    name: 'Docker',
    tagline: 'Master containerization with Docker. Learn to build, ship, and run applications anywhere with container technology.',
    accent: {
      text: 'text-sky-300',
      border: 'hover:border-sky-500/50',
      bg: 'bg-sky-500/10',
      ring: 'border-sky-500/30',
      dot: 'bg-sky-400',
    },
    labsReady: true,
    machine: 'Docker Engine, Compose and buildx, ready to run',
    sampleCommands: ['docker run -d -p 8080:80 nginx', 'docker build -t my-app .', 'docker compose up'],
    overview:
      "This comprehensive Docker course covers everything from basic container concepts to production-ready deployments. You'll learn industry best practices and gain hands-on experience building and managing containerized applications.",
    coreSkills: [
      'Container fundamentals & architecture',
      'Docker CLI & daemon operations',
      'Image creation & Dockerfile',
      'Container networking',
      'Data persistence with volumes',
    ],
    advancedTopics: [
      'Multi-stage builds optimization',
      'Docker Compose orchestration',
      'Container security best practices',
      'Docker registry & image management',
      'CI/CD integration',
    ],
    modules: [
      {
        title: 'Container Fundamentals',
        description: 'Understand containers vs VMs, Docker architecture, and get hands-on with basic Docker commands.',
        duration: '2-3 hours',
      },
      {
        title: 'Images & Dockerfiles',
        description: 'Learn to create custom images, write efficient Dockerfiles, and understand image layers and caching.',
        duration: '3-4 hours',
      },
      {
        title: 'Networking & Volumes',
        description: 'Master Docker networking modes, bridge networks, port mapping, and persistent data with volumes.',
        duration: '3-4 hours',
      },
      {
        title: 'Docker Compose',
        description: 'Orchestrate multi-container applications, define services, networks, and volumes with docker-compose.yml.',
        duration: '3-4 hours',
      },
      {
        title: 'Production & Security',
        description: 'Multi-stage builds, image optimization, security scanning, secrets management, and registry operations.',
        duration: '4-5 hours',
      },
    ],
    prerequisites:
      'Basic Linux command-line knowledge recommended. Familiarity with software development concepts helpful but not required.',
    included: [
      '15-18 hours of in-depth video tutorials',
      'Practical labs with real applications',
      'Dockerfile templates and examples',
      'Docker Compose project templates',
      'Certificate of completion',
    ],
    audience: [
      'Software developers and engineers',
      'DevOps practitioners',
      'System administrators modernizing infrastructure',
      'Cloud engineers',
      'Anyone building modern applications',
    ],
    outcomes: [
      'Containerize any application with Docker',
      'Write production-ready Dockerfiles',
      'Orchestrate multi-container apps with Docker Compose',
      'Implement container security best practices',
      'Optimize images for size and performance',
      'Integrate Docker into CI/CD pipelines',
    ],
    cta: { title: 'Ready to Containerize?', text: 'Start your Docker journey and revolutionize how you build and deploy applications.' },
  },
  {
    id: 'kubernetes',
    name: 'Kubernetes',
    tagline: 'Master container orchestration with Kubernetes. Deploy, scale, and manage production-grade applications with confidence.',
    accent: {
      text: 'text-violet-300',
      border: 'hover:border-violet-500/50',
      bg: 'bg-violet-500/10',
      ring: 'border-violet-500/30',
      dot: 'bg-violet-400',
    },
    labsReady: false,
    machine: 'A single-node Kubernetes cluster with kubectl',
    sampleCommands: ['kubectl get nodes', 'kubectl create deployment web --image=nginx', 'kubectl get pods -A'],
    overview:
      "This comprehensive Kubernetes course takes you from core concepts to advanced cluster management. You'll learn to deploy and manage production workloads, implement best practices, and troubleshoot complex distributed systems.",
    coreSkills: [
      'Kubernetes architecture & components',
      'Pods, Deployments, and ReplicaSets',
      'Services & networking',
      'ConfigMaps & Secrets',
      'Persistent storage & StatefulSets',
    ],
    advancedTopics: [
      'Ingress controllers & routing',
      'Helm charts & package management',
      'RBAC & security policies',
      'Monitoring & logging (Prometheus, ELK)',
      'Auto-scaling & resource management',
    ],
    modules: [
      {
        title: 'Kubernetes Fundamentals',
        description: 'Understanding K8s architecture, control plane components, nodes, and setting up your first cluster (minikube, kind).',
        duration: '3-4 hours',
      },
      {
        title: 'Core Workload Resources',
        description: 'Deep dive into Pods, Deployments, ReplicaSets, DaemonSets, and Jobs. Learn deployment strategies and rollbacks.',
        duration: '4-5 hours',
      },
      {
        title: 'Networking & Services',
        description: 'Master Services (ClusterIP, NodePort, LoadBalancer), Ingress controllers, and network policies.',
        duration: '3-4 hours',
      },
      {
        title: 'Configuration & Storage',
        description: 'ConfigMaps, Secrets management, PersistentVolumes, PersistentVolumeClaims, and StatefulSets for stateful applications.',
        duration: '3-4 hours',
      },
      {
        title: 'Advanced Operations',
        description: 'RBAC, security contexts, Helm package manager, monitoring with Prometheus/Grafana, and production best practices.',
        duration: '5-6 hours',
      },
    ],
    prerequisites:
      'Solid understanding of Docker and containerization required. Experience with Linux command line and basic networking concepts essential.',
    included: [
      '18-22 hours of comprehensive training',
      'Hands-on cluster setup and management',
      'Real-world deployment scenarios',
      'YAML manifests and Helm chart examples',
      'Troubleshooting guides and playbooks',
      'Certificate of completion',
    ],
    audience: [
      'DevOps engineers and SREs',
      'Cloud architects',
      'Backend developers deploying to K8s',
      'System administrators managing containers',
    ],
    outcomes: [
      'Deploy and manage production Kubernetes clusters',
      'Design and implement scalable application architectures',
      'Configure networking, storage, and security',
      'Use Helm for package management and deployments',
      'Implement monitoring and observability solutions',
      'Troubleshoot complex cluster issues',
      'Prepare for CKA/CKAD certification exams',
    ],
    cta: { title: 'Ready to Orchestrate?', text: 'Master Kubernetes and take your container orchestration skills to the next level.' },
  },
];

export const courseById = (id: TrackId) => courses.find((c) => c.id === id)!;
