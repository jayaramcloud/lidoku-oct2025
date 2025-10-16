import Link from 'next/link';

export default function LinuxCourse() {
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
              <Link href="/linux" className="text-blue-400 font-semibold">Linux</Link>
              <Link href="/docker" className="text-gray-300 hover:text-white transition">Docker</Link>
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
            <div className="text-7xl mb-6">🐧</div>
            <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
              Linux Training
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Master Linux system administration from fundamentals to advanced topics.
              Build the foundation every DevOps engineer needs.
            </p>
          </div>
        </div>
      </section>

      {/* Course Overview */}
      <section className="px-4 py-12 bg-slate-800/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-400 mb-8">Course Overview</h2>

          <div className="bg-slate-900 border border-slate-700 rounded-xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">What You&apos;ll Learn</h3>
            <p className="text-gray-300 mb-6">
              This comprehensive Linux training program takes you from basic command-line operations
              to advanced system administration. You&apos;ll gain hands-on experience with real-world
              scenarios and best practices used by professional system administrators.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div>
                <h4 className="text-lg font-semibold text-blue-300 mb-3">Core Skills</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>✓ Command-line mastery</li>
                  <li>✓ File system navigation & management</li>
                  <li>✓ User & permission management</li>
                  <li>✓ Process management & monitoring</li>
                  <li>✓ System services & systemd</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-blue-300 mb-3">Advanced Topics</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>✓ Shell scripting & automation</li>
                  <li>✓ Networking & firewall configuration</li>
                  <li>✓ Package management (apt, yum, dnf)</li>
                  <li>✓ Security hardening & SELinux</li>
                  <li>✓ Log analysis & troubleshooting</li>
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
            <div className="bg-slate-900 border border-slate-700 rounded-xl p-6 hover:border-blue-500 transition">
              <h3 className="text-xl font-bold text-blue-400 mb-3">Module 1: Linux Fundamentals</h3>
              <p className="text-gray-300 mb-4">
                Get started with Linux basics, file system hierarchy, essential commands,
                and text editors (vim, nano).
              </p>
              <div className="text-sm text-gray-500">Duration: 2-3 hours</div>
            </div>

            {/* Module 2 */}
            <div className="bg-slate-900 border border-slate-700 rounded-xl p-6 hover:border-blue-500 transition">
              <h3 className="text-xl font-bold text-blue-400 mb-3">Module 2: System Administration</h3>
              <p className="text-gray-300 mb-4">
                Learn user management, file permissions, process control, and system monitoring tools.
              </p>
              <div className="text-sm text-gray-500">Duration: 3-4 hours</div>
            </div>

            {/* Module 3 */}
            <div className="bg-slate-900 border border-slate-700 rounded-xl p-6 hover:border-blue-500 transition">
              <h3 className="text-xl font-bold text-blue-400 mb-3">Module 3: Shell Scripting</h3>
              <p className="text-gray-300 mb-4">
                Master Bash scripting for automation, including variables, loops, conditionals,
                and functions.
              </p>
              <div className="text-sm text-gray-500">Duration: 4-5 hours</div>
            </div>

            {/* Module 4 */}
            <div className="bg-slate-900 border border-slate-700 rounded-xl p-6 hover:border-blue-500 transition">
              <h3 className="text-xl font-bold text-blue-400 mb-3">Module 4: Networking & Security</h3>
              <p className="text-gray-300 mb-4">
                Configure networks, set up firewalls (iptables, firewalld), SSH, and implement
                security best practices.
              </p>
              <div className="text-sm text-gray-500">Duration: 3-4 hours</div>
            </div>

            {/* Module 5 */}
            <div className="bg-slate-900 border border-slate-700 rounded-xl p-6 hover:border-blue-500 transition">
              <h3 className="text-xl font-bold text-blue-400 mb-3">Module 5: Advanced Topics</h3>
              <p className="text-gray-300 mb-4">
                Systemd service management, cron jobs, log rotation, backup strategies,
                and performance tuning.
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
              <h3 className="text-2xl font-bold text-blue-400 mb-4">Prerequisites</h3>
              <p className="text-gray-300 mb-6">
                No prior Linux experience required. Basic computer literacy and willingness
                to learn command-line interfaces recommended.
              </p>

              <h3 className="text-2xl font-bold text-blue-400 mb-4">What&apos;s Included</h3>
              <ul className="space-y-2 text-gray-300 mb-6">
                <li>• 16-20 hours of comprehensive video content</li>
                <li>• Hands-on labs and practical exercises</li>
                <li>• Downloadable resources and cheat sheets</li>
                <li>• Real-world project scenarios</li>
                <li>• Certificate of completion</li>
              </ul>

              <h3 className="text-2xl font-bold text-blue-400 mb-4">Target Audience</h3>
              <ul className="space-y-2 text-gray-300 mb-6">
                <li>• Aspiring DevOps engineers</li>
                <li>• System administrators</li>
                <li>• Developers moving to cloud infrastructure</li>
                <li>• IT professionals expanding their skill set</li>
                <li>• Anyone interested in Linux and open source</li>
              </ul>

              <h3 className="text-2xl font-bold text-blue-400 mb-4">Learning Outcomes</h3>
              <p className="text-gray-300 mb-4">
                By the end of this course, you&apos;ll be able to:
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• Navigate and manage Linux systems confidently</li>
                <li>• Write shell scripts to automate common tasks</li>
                <li>• Configure and secure Linux servers</li>
                <li>• Troubleshoot system issues effectively</li>
                <li>• Prepare for Linux certification exams (LPIC, RHCSA)</li>
              </ul>
            </div>
          </div>

          {/* Enrollment & Pricing */}
          <div className="mt-8 bg-slate-900 border border-slate-700 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-blue-400 mb-6">Enrollment Information</h3>

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
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition transform hover:scale-105 whitespace-nowrap">
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
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Start?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Begin your Linux journey today and unlock the power of open source.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition transform hover:scale-105">
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
