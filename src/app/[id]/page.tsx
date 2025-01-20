'use client'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useParams } from 'next/navigation'
import projects from '../data/projects.json'

import Image from 'next/image'

export default function Project() {
  const { id } = useParams()
  const project = projects.find((project) => project.id === id)
  return (
    <>
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>
      <div className="container mx-auto p-4 pt-0">
        <Image
          src={project!.images[1]}
          alt={project!.title}
          width={2000}
          height={1600}
          className="w-full h-auto object-cover rounded-t-lg"
        />
        <div className="flex flex-col mt-4">
          <div className="flex items-center justify-between">
            <span
              className="text-2xl font-bold font-mono mb-2"
              style={{ fontFamily: 'var(--font-space-mono)' }}
            >
              {project!.title}
            </span>
            <span
              className="text-lg font-bold font-mono"
              style={{ fontFamily: 'var(--font-space-mono)' }}
            >
              {project!.platform}
            </span>
          </div>
          <span
            className="text-sm text-neutral-400 font-bold font-mono"
            style={{ fontFamily: 'var(--font-space-mono)' }}
          >
            {project!.type}
          </span>
        </div>
        <div className="mt-4">
          <p
            className="text-sm font-bold"
            style={{ fontFamily: 'var(--font-space-sans)' }}
          >
            {project!.description}
          </p>
        </div>
        <div className="grid grid-cols-[auto,1fr] gap-x-12 gap-y-4 my-2">
          {/* Header Row */}
          <p
            className="text-sm uppercase opacity-75 mt-2"
            style={{ fontFamily: 'var(--font-space-mono)' }}
          >
            Year
          </p>
          <p
            className="text-sm uppercase opacity-75 mt-2"
            style={{ fontFamily: 'var(--font-space-mono)' }}
          >
            Tags
          </p>

          {/* Data Rows */}
          <div>
            <p
              className="text-sm font-bold"
              style={{ fontFamily: 'var(--font-space-sans)' }}
            >
              {project!.year}
            </p>
          </div>
          <div>
            <p
              className="text-sm font-bold"
              style={{ fontFamily: 'var(--font-space-sans)' }}
            >
              {project!.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-neutral-400 bg-neutral-800 p-2 rounded-md mr-2"
                >
                  {tag}
                </span>
              ))}
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
