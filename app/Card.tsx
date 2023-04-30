import React from 'react'

function Card({ user }: { user: string | null | undefined }) {
  return (
    <div className="flex flex-col items-center justify-center gap-2 p-5 max-w-xs w-full bg-white shadow-lg rounded-lg font-bold text-xl">
      welcom back {user}
    </div>
  );
}

export default Card