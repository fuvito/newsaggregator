'use client'

import {useState} from "react";
import {states} from "@/app/data/states";
import {topics} from "@/app/data/topics";

interface Props {
  onSearchAndFilterAction: (state: string, topic: string, search: string) => void
}

export default function Search({onSearchAndFilterAction}: Props) {
  const [state, setState] = useState("")
  const [topic, setTopic] = useState("")
  const [search, setSearch] = useState("")

  function handleSearchAndFilter(event: React.MouseEvent<HTMLButtonElement>): void {
    event.preventDefault();
    console.log(state, topic, search);
    onSearchAndFilterAction(state, topic, search);
  }

  return (
    <div className="m-3">
      <div className="row">

        <div className="col-12 col-md-3">
          <label htmlFor="state" className="form-label">Select State: </label>
          <select id="state" className="form-select" aria-label="Select State" value={state}
                  onChange={e => setState(e.target.value)}>
            <option value="">All States</option>
            {states.map(s =>
              <option value={s.id} key={s.id}>{s.id} - {s.name}</option>
            )}
          </select>
        </div>

        <div className="col-12 col-md-3">
          <label htmlFor="topic" className="form-label">Topic: </label>
          <select id="topic" className="form-select" aria-label="Select Topic"
                  value={topic} onChange={e => setTopic(e.target.value)}>
            <option value="">All Topics</option>
            {topics.map(t =>
              <option value={t.id} key={t.id}>{t.id}</option>
            )}
          </select>
        </div>

        <div className="col-12 col-md-5">
          <label htmlFor="search" className="form-label">Text Search: </label>
          <input type="text" className="form-control" id="search"
                 value={search} onChange={e => setSearch(e.target.value)}/>
        </div>

        <div className="col-12 col-md-1">
          <button className="w-100 h-100 btn btn-lg btn-outline-primary" onClick={handleSearchAndFilter}>
            <span className="bi bi-search"></span>
          </button>
        </div>

      </div>
    </div>
  )
}
