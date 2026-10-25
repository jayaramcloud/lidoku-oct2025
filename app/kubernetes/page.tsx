import { CoursePage } from '@/components/course-page';
import { courseById } from '@/lib/courses';
import type { Metadata } from 'next';

const course = courseById('kubernetes');

export const metadata: Metadata = { title: 'Kubernetes training', description: course.tagline };

export default function KubernetesCourse() {
  return <CoursePage course={course} />;
}
