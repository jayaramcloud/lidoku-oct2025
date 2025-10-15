import Link from 'next/link';

export default function Home() {
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
              <a href="#linux" className="text-gray-300 hover:text-white transition">Linux</a>
              <a href="#docker" className="text-gray-300 hover:text-white transition">Docker</a>
              <a href="#kubernetes" className="text-gray-300 hover:text-white transition">Kubernetes</a>
              <a href="#about" className="text-gray-300 hover:text-white transition">About</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative px-4 py-20 sm:py-32">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl sm:text-7xl font-bold text-white mb-6">
            Master <span className="text-blue-400">Linux</span>,{' '}
            <span className="text-cyan-400">Docker</span> &{' '}
            <span className="text-teal-400">Kubernetes</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Professional training and resources to elevate your DevOps and infrastructure skills
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#courses"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition transform hover:scale-105"
            >
              Explore Courses
            </a>
            <a
              href="#about"
              className="bg-slate-700 hover:bg-slate-600 text-white font-semibold px-8 py-4 rounded-lg transition transform hover:scale-105"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="px-4 py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            Training Paths
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Linux Card */}
            <div id="linux" className="bg-slate-900 border border-slate-700 rounded-xl p-8 hover:border-blue-500 transition transform hover:scale-105">
              <div className="text-5xl mb-4">🐧</div>
              <h3 className="text-3xl font-bold text-blue-400 mb-4">Linux</h3>
              <p className="text-gray-300 mb-6">
                Master the fundamentals of Linux system administration, shell scripting,
                networking, and security practices.
              </p>
              <ul className="space-y-2 text-gray-400 mb-6">
                <li>✓ System Administration</li>
                <li>✓ Shell Scripting (Bash)</li>
                <li>✓ Networking & Security</li>
                <li>✓ Package Management</li>
                <li>✓ Process Management</li>
              </ul>
              <Link href="/linux" className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition text-center">
                Start Learning
              </Link>
            </div>

            {/* Docker Card */}
            <div id="docker" className="bg-slate-900 border border-slate-700 rounded-xl p-8 hover:border-cyan-500 transition transform hover:scale-105">
              <div className="text-5xl mb-4">🐳</div>
              <h3 className="text-3xl font-bold text-cyan-400 mb-4">Docker</h3>
              <p className="text-gray-300 mb-6">
                Learn containerization from basics to advanced topics including
                multi-stage builds, networking, and orchestration.
              </p>
              <ul className="space-y-2 text-gray-400 mb-6">
                <li>✓ Container Fundamentals</li>
                <li>✓ Dockerfile Best Practices</li>
                <li>✓ Docker Compose</li>
                <li>✓ Networking & Volumes</li>
                <li>✓ Security & Optimization</li>
              </ul>
              <Link href="/docker" className="block w-full bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-3 rounded-lg transition text-center">
                Start Learning
              </Link>
            </div>

            {/* Kubernetes Card */}
            <div id="kubernetes" className="bg-slate-900 border border-slate-700 rounded-xl p-8 hover:border-teal-500 transition transform hover:scale-105">
              <div className="text-5xl mb-4">☸️</div>
              <h3 className="text-3xl font-bold text-teal-400 mb-4">Kubernetes</h3>
              <p className="text-gray-300 mb-6">
                Deep dive into Kubernetes orchestration, deployment strategies,
                scaling, and production-ready cluster management.
              </p>
              <ul className="space-y-2 text-gray-400 mb-6">
                <li>✓ Cluster Architecture</li>
                <li>✓ Pods & Deployments</li>
                <li>✓ Services & Ingress</li>
                <li>✓ ConfigMaps & Secrets</li>
                <li>✓ Monitoring & Logging</li>
              </ul>
              <Link href="/kubernetes" className="block w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 rounded-lg transition text-center">
                Start Learning
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-8">
              About LiDoKu
            </h2>
            <p className="text-xl text-gray-300 mb-6 max-w-4xl mx-auto">
              LiDoKu provides comprehensive training and resources for modern DevOps technologies.
              Whether you&apos;re a beginner or an experienced professional, our courses are designed
              to help you master Linux, Docker, and Kubernetes.
            </p>
            <p className="text-lg text-gray-400 max-w-4xl mx-auto">
              Our mission is to make infrastructure and container technologies accessible and
              practical for everyone in the software development ecosystem.
            </p>
          </div>

          {/* Instructor Section */}
          <div className="mt-16">
            <h3 className="text-3xl font-bold text-white text-center mb-12">
              Led by Industry Expert
            </h3>
            <div className="bg-slate-900 border border-slate-700 rounded-xl p-8 md:p-12 max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                {/* Profile Image Placeholder */}
                <div className="flex-shrink-0">
                  <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white text-4xl font-bold">
                    SK
                  </div>
                </div>

                {/* Instructor Details */}
                <div className="flex-1 text-center md:text-left">
                  <h4 className="text-2xl font-bold text-white mb-2">
                    Suma Kadur
                  </h4>
                  <p className="text-cyan-400 font-semibold mb-4">
                    Head of Cloud DevOps/SecOps/SRE
                  </p>
                  <p className="text-gray-300 mb-4">
                    Strategic Leader in Infrastructure & Developer Experience
                  </p>
                  <p className="text-gray-400 mb-6">
                    With over 20 years of experience driving CloudOps, AI Operations,
                    Platform Engineering & Compliance, Suma brings deep expertise and
                    real-world insights to every course.
                  </p>

                  <div className="bg-slate-800 border border-slate-600 rounded-lg p-4">
                    <h5 className="text-sm font-semibold text-blue-300 mb-2">Expertise Areas</h5>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-blue-900/50 text-blue-200 px-3 py-1 rounded-full text-sm">Cloud DevOps</span>
                      <span className="bg-cyan-900/50 text-cyan-200 px-3 py-1 rounded-full text-sm">SecOps</span>
                      <span className="bg-teal-900/50 text-teal-200 px-3 py-1 rounded-full text-sm">SRE</span>
                      <span className="bg-blue-900/50 text-blue-200 px-3 py-1 rounded-full text-sm">Platform Engineering</span>
                      <span className="bg-cyan-900/50 text-cyan-200 px-3 py-1 rounded-full text-sm">AI Operations</span>
                      <span className="bg-teal-900/50 text-teal-200 px-3 py-1 rounded-full text-sm">Compliance</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
