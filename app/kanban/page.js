'use client'

import React from 'react'

export default function KanbanPage() {
  const columns = {
    backlog: [
      { id: 1, title: 'Google Cloud Security Engineer Certification', description: 'Prepare for and obtain the certification to validate skills in securing Google Cloud infrastructure.' },
      { id: 2, title: 'Hack The Box Rooms', description: 'Engage with hands-on labs and challenges on Hack The Box to build practical offensive and defensive security skills.' },
      { id: 3, title: 'Q-CTRL Black Opal', description: 'Learn quantum computing fundamentals to understand its future impact on cryptography and security.' },
      { id: 4, title: 'DevSecOps - CI/CD Pipeline with Docker', description: 'Implement a CI/CD pipeline that integrates automated security checks (e.g., SAST, container scanning) to secure the software development lifecycle.' }
    ],
    new: [
      { id: 5, title: 'WGU MS in Computer Science, Computing Systems', description: 'Pursuing a Master of Science degree with a focus on advanced computing systems principles.' },
      { id: 6, title: 'Learn Java (IBM Coursera Course)', description: 'Build and deploy full-stack Java applications using Spring, databases, and containers, and explore integrations with front-end and AI tools.' }
    ],
    inProgress: [
      { id: 7, title: 'Building Personal Portfolio Website', description: 'Currently designing and developing a personal website to showcase projects and skills.' },
      { id: 8, title: 'Google Cloud Honeypot Deployment', description: 'Deploying a honeypot in Google Cloud and creating visualizations for the resulting attack traffic.' }
    ],
    complete: [
      { id: 9, title: 'Azure Honeypot Deployment', description: 'Successfully deployed and managed a honeypot on Microsoft Azure to capture and analyze cyberattack data, including data visualization.' },
      { id: 10, title: 'Git Version Control', description: 'Mastered essential Git operations for version control and collaborative development.' },
      { id: 11, title: 'Docker Fundamentals', description: 'Mastered core Docker concepts for creating, managing, and deploying containerized applications.' }
    ]
  }

  return (
    <div className="px-4 sm:px-6 lg:px-8 pt-20 pb-8 w-full max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8">Personal Kanban</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {Object.entries(columns).map(([columnName, items]) => (
          <div key={columnName} className="bg-background-light rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-4 capitalize">{columnName}</h2>
            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.id} className="bg-background p-4 rounded-lg shadow">
                  <h3 className="font-medium">{item.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 