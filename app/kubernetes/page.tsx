import Link from 'next/link';

export default function KubernetesCourse() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Navigation */}
      <nav className="bg-slate-900/50 backdrop-blur-sm border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-white">
                Li<span className="text-blue-400">Do</span><span className="text-cyan-400">Ku</span>
              </Link>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link href="/linux" className="text-gray-300 hover:text-white transition">Linux</Link>
              <Link href="/docker" className="text-gray-300 hover:text-white transition">Docker</Link>
              <Link href="/kubernetes" className="text-teal-400 font-semibold">Kubernetes</Link>
              <Link href="/" className="text-gray-300 hover:text-white transition">Home</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-4 py-16 sm:py-24">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-7xl mb-6">☸️</div>
            <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
              Kubernetes Training
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Master container orchestration with Kubernetes. Deploy, scale, and manage
              production-grade applications with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Course Overview */}
      <section className="px-4 py-12 bg-slate-800/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-teal-400 mb-8">Course Overview</h2>

          <div className="bg-slate-900 border border-slate-700 rounded-xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">What You&apos;ll Learn</h3>
            <p className="text-gray-300 mb-6">
              This comprehensive Kubernetes course takes you from core concepts to advanced
              cluster management. You&apos;ll learn to deploy and manage production workloads,
              implement best practices, and troubleshoot complex distributed systems.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div>
                <h4 className="text-lg font-semibold text-teal-300 mb-3">Core Skills</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>✓ Kubernetes architecture & components</li>
                  <li>✓ Pods, Deployments, and ReplicaSets</li>
                  <li>✓ Services & networking</li>
                  <li>✓ ConfigMaps & Secrets</li>
                  <li>✓ Persistent storage & StatefulSets</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-teal-300 mb-3">Advanced Topics</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>✓ Ingress controllers & routing</li>
                  <li>✓ Helm charts & package management</li>
                  <li>✓ RBAC & security policies</li>
                  <li>✓ Monitoring & logging (Prometheus, ELK)</li>
                  <li>✓ Auto-scaling & resource management</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Modules */}
      <section className="px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8">Course Modules</h2>

          <div className="space-y-6">
            {/* Module 1 */}
            <div className="bg-slate-900 border border-slate-700 rounded-xl p-6 hover:border-teal-500 transition">
              <h3 className="text-xl font-bold text-teal-400 mb-3">Module 1: Kubernetes Fundamentals</h3>
              <p className="text-gray-300 mb-4">
                Understanding K8s architecture, control plane components, nodes, and setting up
                your first cluster (minikube, kind).
              </p>
              <div className="text-sm text-gray-500">Duration: 3-4 hours</div>
            </div>

            {/* Module 2 */}
            <div className="bg-slate-900 border border-slate-700 rounded-xl p-6 hover:border-teal-500 transition">
              <h3 className="text-xl font-bold text-teal-400 mb-3">Module 2: Core Workload Resources</h3>
              <p className="text-gray-300 mb-4">
                Deep dive into Pods, Deployments, ReplicaSets, DaemonSets, and Jobs. Learn
                deployment strategies and rollbacks.
              </p>
              <div className="text-sm text-gray-500">Duration: 4-5 hours</div>
            </div>

            {/* Module 3 */}
            <div className="bg-slate-900 border border-slate-700 rounded-xl p-6 hover:border-teal-500 transition">
              <h3 className="text-xl font-bold text-teal-400 mb-3">Module 3: Networking & Services</h3>
              <p className="text-gray-300 mb-4">
                Master Services (ClusterIP, NodePort, LoadBalancer), Ingress controllers,
                and network policies.
              </p>
              <div className="text-sm text-gray-500">Duration: 3-4 hours</div>
            </div>

            {/* Module 4 */}
            <div className="bg-slate-900 border border-slate-700 rounded-xl p-6 hover:border-teal-500 transition">
              <h3 className="text-xl font-bold text-teal-400 mb-3">Module 4: Configuration & Storage</h3>
              <p className="text-gray-300 mb-4">
                ConfigMaps, Secrets management, PersistentVolumes, PersistentVolumeClaims,
                and StatefulSets for stateful applications.
              </p>
              <div className="text-sm text-gray-500">Duration: 3-4 hours</div>
            </div>

            {/* Module 5 */}
            <div className="bg-slate-900 border border-slate-700 rounded-xl p-6 hover:border-teal-500 transition">
              <h3 className="text-xl font-bold text-teal-400 mb-3">Module 5: Advanced Operations</h3>
              <p className="text-gray-300 mb-4">
                RBAC, security contexts, Helm package manager, monitoring with Prometheus/Grafana,
                and production best practices.
              </p>
              <div className="text-sm text-gray-500">Duration: 5-6 hours</div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Details Section */}
      <section id="details" className="px-4 py-12 bg-slate-800/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8">Course Details</h2>

          <div className="bg-slate-900 border border-slate-700 rounded-xl p-8">
            <div className="prose prose-invert max-w-none">
              <h3 className="text-2xl font-bold text-teal-400 mb-4">Prerequisites</h3>
              <p className="text-gray-300 mb-6">
                Solid understanding of Docker and containerization required. Experience with
                Linux command line and basic networking concepts essential.
              </p>

              <h3 className="text-2xl font-bold text-teal-400 mb-4">What&apos;s Included</h3>
              <ul className="space-y-2 text-gray-300 mb-6">
                <li>• 18-22 hours of comprehensive training</li>
                <li>• Hands-on cluster setup and management</li>
                <li>• Real-world deployment scenarios</li>
                <li>• YAML manifests and Helm chart examples</li>
                <li>• Troubleshooting guides and playbooks</li>
                <li>• Certificate of completion</li>
              </ul>

              <h3 className="text-2xl font-bold text-teal-400 mb-4">Target Audience</h3>
              <ul className="space-y-2 text-gray-300 mb-6">
                <li>• DevOps engineers and SREs</li>
                <li>• Cloud architects</li>
                <li>• Backend developers deploying to K8s</li>
                <li>• System administrators managing containers</li>
              </ul>

              <h3 className="text-2xl font-bold text-teal-400 mb-4">Learning Outcomes</h3>
              <p className="text-gray-300 mb-4">
                By the end of this course, you&apos;ll be able to:
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• Deploy and manage production Kubernetes clusters</li>
                <li>• Design and implement scalable application architectures</li>
                <li>• Configure networking, storage, and security</li>
                <li>• Use Helm for package management and deployments</li>
                <li>• Implement monitoring and observability solutions</li>
                <li>• Troubleshoot complex cluster issues</li>
                <li>• Prepare for CKA/CKAD certification exams</li>
              </ul>
            </div>
          </div>

          {/* Placeholder for customization */}
          <div className="mt-8 bg-teal-900/20 border border-teal-700 rounded-xl p-8">
            <h3 className="text-xl font-bold text-teal-300 mb-4">
              📝 Add Your Course Content Here
            </h3>
            <p className="text-gray-300">
              Edit this file at <code className="bg-slate-800 px-2 py-1 rounded">app/kubernetes/page.tsx</code>
              {' '}to add your specific course details, pricing, enrollment information, or any other
              content you&apos;d like to include.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Orchestrate?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Master Kubernetes and take your container orchestration skills to the next level.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-8 py-4 rounded-lg transition transform hover:scale-105">
              Enroll Now
            </button>
            <Link
              href="/"
              className="bg-slate-700 hover:bg-slate-600 text-white font-semibold px-8 py-4 rounded-lg transition transform hover:scale-105"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-700 px-4 py-8">
        <div className="max-w-7xl mx-auto text-center text-gray-400">
          <p>&copy; 2025 LiDoKu. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
