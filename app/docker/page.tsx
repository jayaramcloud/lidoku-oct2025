import Link from 'next/link';

export default function DockerCourse() {
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
              <Link href="/docker" className="text-cyan-400 font-semibold">Docker</Link>
              <Link href="/kubernetes" className="text-gray-300 hover:text-white transition">Kubernetes</Link>
              <Link href="/" className="text-gray-300 hover:text-white transition">Home</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-4 py-16 sm:py-24">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-7xl mb-6">🐳</div>
            <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
              Docker Training
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Master containerization with Docker. Learn to build, ship, and run applications
              anywhere with container technology.
            </p>
          </div>
        </div>
      </section>

      {/* Course Overview */}
      <section className="px-4 py-12 bg-slate-800/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-cyan-400 mb-8">Course Overview</h2>

          <div className="bg-slate-900 border border-slate-700 rounded-xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">What You&apos;ll Learn</h3>
            <p className="text-gray-300 mb-6">
              This comprehensive Docker course covers everything from basic container concepts
              to production-ready deployments. You&apos;ll learn industry best practices and gain
              hands-on experience building and managing containerized applications.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div>
                <h4 className="text-lg font-semibold text-cyan-300 mb-3">Core Skills</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>✓ Container fundamentals & architecture</li>
                  <li>✓ Docker CLI & daemon operations</li>
                  <li>✓ Image creation & Dockerfile</li>
                  <li>✓ Container networking</li>
                  <li>✓ Data persistence with volumes</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-cyan-300 mb-3">Advanced Topics</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>✓ Multi-stage builds optimization</li>
                  <li>✓ Docker Compose orchestration</li>
                  <li>✓ Container security best practices</li>
                  <li>✓ Docker registry & image management</li>
                  <li>✓ CI/CD integration</li>
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
            <div className="bg-slate-900 border border-slate-700 rounded-xl p-6 hover:border-cyan-500 transition">
              <h3 className="text-xl font-bold text-cyan-400 mb-3">Module 1: Container Fundamentals</h3>
              <p className="text-gray-300 mb-4">
                Understand containers vs VMs, Docker architecture, and get hands-on with
                basic Docker commands.
              </p>
              <div className="text-sm text-gray-500">Duration: 2-3 hours</div>
            </div>

            {/* Module 2 */}
            <div className="bg-slate-900 border border-slate-700 rounded-xl p-6 hover:border-cyan-500 transition">
              <h3 className="text-xl font-bold text-cyan-400 mb-3">Module 2: Images & Dockerfiles</h3>
              <p className="text-gray-300 mb-4">
                Learn to create custom images, write efficient Dockerfiles, and understand
                image layers and caching.
              </p>
              <div className="text-sm text-gray-500">Duration: 3-4 hours</div>
            </div>

            {/* Module 3 */}
            <div className="bg-slate-900 border border-slate-700 rounded-xl p-6 hover:border-cyan-500 transition">
              <h3 className="text-xl font-bold text-cyan-400 mb-3">Module 3: Networking & Volumes</h3>
              <p className="text-gray-300 mb-4">
                Master Docker networking modes, bridge networks, port mapping, and persistent
                data with volumes.
              </p>
              <div className="text-sm text-gray-500">Duration: 3-4 hours</div>
            </div>

            {/* Module 4 */}
            <div className="bg-slate-900 border border-slate-700 rounded-xl p-6 hover:border-cyan-500 transition">
              <h3 className="text-xl font-bold text-cyan-400 mb-3">Module 4: Docker Compose</h3>
              <p className="text-gray-300 mb-4">
                Orchestrate multi-container applications, define services, networks, and volumes
                with docker-compose.yml.
              </p>
              <div className="text-sm text-gray-500">Duration: 3-4 hours</div>
            </div>

            {/* Module 5 */}
            <div className="bg-slate-900 border border-slate-700 rounded-xl p-6 hover:border-cyan-500 transition">
              <h3 className="text-xl font-bold text-cyan-400 mb-3">Module 5: Production & Security</h3>
              <p className="text-gray-300 mb-4">
                Multi-stage builds, image optimization, security scanning, secrets management,
                and registry operations.
              </p>
              <div className="text-sm text-gray-500">Duration: 4-5 hours</div>
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
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">Prerequisites</h3>
              <p className="text-gray-300 mb-6">
                Basic Linux command-line knowledge recommended. Familiarity with software
                development concepts helpful but not required.
              </p>

              <h3 className="text-2xl font-bold text-cyan-400 mb-4">What&apos;s Included</h3>
              <ul className="space-y-2 text-gray-300 mb-6">
                <li>• 15-18 hours of in-depth video tutorials</li>
                <li>• Practical labs with real applications</li>
                <li>• Dockerfile templates and examples</li>
                <li>• Docker Compose project templates</li>
                <li>• Certificate of completion</li>
              </ul>

              <h3 className="text-2xl font-bold text-cyan-400 mb-4">Target Audience</h3>
              <ul className="space-y-2 text-gray-300 mb-6">
                <li>• Software developers and engineers</li>
                <li>• DevOps practitioners</li>
                <li>• System administrators modernizing infrastructure</li>
                <li>• Cloud engineers</li>
                <li>• Anyone building modern applications</li>
              </ul>

              <h3 className="text-2xl font-bold text-cyan-400 mb-4">Learning Outcomes</h3>
              <p className="text-gray-300 mb-4">
                By the end of this course, you&apos;ll be able to:
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• Containerize any application with Docker</li>
                <li>• Write production-ready Dockerfiles</li>
                <li>• Orchestrate multi-container apps with Docker Compose</li>
                <li>• Implement container security best practices</li>
                <li>• Optimize images for size and performance</li>
                <li>• Integrate Docker into CI/CD pipelines</li>
              </ul>
            </div>
          </div>

          {/* Enrollment & Pricing */}
          <div className="mt-8 bg-slate-900 border border-slate-700 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-cyan-400 mb-6">Enrollment Information</h3>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-white mb-3">Course Format</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>• Self-paced online learning</li>
                  <li>• Lifetime access to course materials</li>
                  <li>• Regular content updates</li>
                  <li>• Community forum access</li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-white mb-3">Support</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>• Email support from instructors</li>
                  <li>• Q&A sessions (monthly)</li>
                  <li>• Peer community support</li>
                  <li>• Course completion certificate</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-slate-700">
              <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                <div>
                  <p className="text-gray-400 mb-2">Course Investment</p>
                  <p className="text-4xl font-bold text-white">Contact for Pricing</p>
                  <p className="text-sm text-gray-400 mt-1">Flexible payment options available</p>
                </div>
                <div className="flex flex-col gap-3 w-full md:w-auto">
                  <button className="bg-cyan-600 hover:bg-cyan-700 text-white font-semibold px-8 py-4 rounded-lg transition transform hover:scale-105 whitespace-nowrap">
                    Request Information
                  </button>
                  <Link
                    href="/"
                    className="text-center bg-slate-700 hover:bg-slate-600 text-white font-semibold px-8 py-4 rounded-lg transition"
                  >
                    View All Courses
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Containerize?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Start your Docker journey and revolutionize how you build and deploy applications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-cyan-600 hover:bg-cyan-700 text-white font-semibold px-8 py-4 rounded-lg transition transform hover:scale-105">
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
