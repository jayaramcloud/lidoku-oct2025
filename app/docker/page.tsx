import { CoursePage } from '@/components/course-page';
import { courseById } from '@/lib/courses';
import type { Metadata } from 'next';

const course = courseById('docker');

export const metadata: Metadata = { title: 'Docker training', description: course.tagline };

export default function DockerCourse() {
  return <CoursePage course={course} />;
}
