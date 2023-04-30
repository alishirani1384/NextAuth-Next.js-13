"use client"
import React, { FormEvent, useState } from 'react'
import { signIn } from "next-auth/react";

function Form() {
  const [name, setName] = useState<undefined | string>();
  const [password, setPassword] = useState<undefined | string>();
  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    signIn("credentials", {
      username: name,
      password
    })
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-2 p-5 max-w-xs w-full bg-white shadow-lg rounded-lg">
      <div className="head text-center">
        <h3 className="font-semibold">You must be sign in to join</h3>
        <small>we are A Team that guides Each other</small>
      </div>
      <button
        onClick={() => signIn("github")}
        type="button"
        className="bg-slate-800 my-4 text-white p-3 rounded-lg">
        Sign in with Github
      </button>
      <div className="relative my-3">
        <hr />
        <small className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-white w-8 text-center">
          Or
        </small>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="name">Email or Username</label>
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
            className="p-3 border border-slate-700 rounded-lg"
            id="name"
            placeholder="Uname@mail.com"
            required
          />
        </div>
        <div className="flex mt-2 flex-col gap-2">
          <label htmlFor="password">Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            id="password"
            className="p-3 border border-slate-700 rounded-lg"
            placeholder="Password"
            required
          />
        </div>
      </div>
      <button
        type="submit"
        className="mt-4 bg-slate-900 text-white p-3 rounded-lg">
        Sign in
      </button>
    </form>
  );
}

export default Form