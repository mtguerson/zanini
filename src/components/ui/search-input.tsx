'use client';

import { SearchIcon } from 'lucide-react';

import { Input } from '@/components/ui/input';
import { useRouter, useSearchParams } from 'next/navigation';

export function SearchInput() {
  const searchParams = useSearchParams();
  const router = useRouter();

  function handleSearch(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const search = formData.get('search');
    router.push(`/search?q=${search}`);
  }

  return (
    <form onSubmit={handleSearch}>
      <div className="*:not-first:mt-2">
        <div className="relative">
          <Input
            key={searchParams.get('q')}
            defaultValue={searchParams.get('q') || ''}
            id="search"
            className="peer ps-9 w-80"
            placeholder="O que você está buscando?"
            type="text"
            autoComplete="off"
            name="search"
          />
          <div className="text-muted-foreground/80 pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 peer-disabled:opacity-50">
            <SearchIcon size={16} />
          </div>
        </div>
      </div>
    </form>
  );
}
