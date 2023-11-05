'use client';
// Using TypeScript for type safety
import React, { useState } from 'react';
import Button from '../buttons';
import { Cross } from 'lucide-react';

interface AnnouncementProps {
  message: React.ReactNode | string;
}

const Announcement = ({ message }: AnnouncementProps) => {
  const [showAnnouncement, setShowAnnouncement] = useState(true);

  // Improved CSS classes for better readability and maintainability
  const containerStyles = `
    flex flex-wrap w-full px-4 py-2 mb-4 text-center text-white
  `;

  const messageStyles = `
    w-full px-4 py-2 text-center text-white bg-red-500
  `;

  return (
    <>
      {showAnnouncement && (
        <div className={containerStyles}>
          <p className={messageStyles}>{message}</p>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setShowAnnouncement(false)}>
            <Cross className="w-4 h-4" />
          </Button>
        </div>
      )}
    </>
  );
};

export default Announcement;
