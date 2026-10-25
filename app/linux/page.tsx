import { CoursePage } from '@/components/course-page';
import { courseById } from '@/lib/courses';
import type { Metadata } from 'next';

const course = courseById('linux');

export const metadata: Metadata = { title: 'Linux training', description: course.tagline };

export default function LinuxCourse() {
  return <CoursePage course={course} />;
}
