'use client';

interface AvatarCirclesProps {
  avatars: string[];
  className?: string;
}

export function AvatarCircles({ avatars, className = '' }: AvatarCirclesProps) {
  return (
    <div className={`flex -space-x-4 ${className}`}>
      {avatars.map((avatar, index) => (
        <div
          key={index}
          className="relative inline-block"
          style={{ zIndex: avatars.length - index }}
        >
          {avatar.startsWith('http') ? (
            <img
              src={avatar}
              alt={`Avatar ${index + 1}`}
              className="w-12 h-12 rounded-full border-2 border-background"
            />
          ) : (
            <div className="w-12 h-12 rounded-full border-2 border-background bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-semibold">
              {avatar}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

