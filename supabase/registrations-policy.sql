-- Ejecuta este script una vez en Supabase: SQL Editor.
-- Permite que el formulario publico cree registros, sin exponer su lectura.

alter table public.registros enable row level security;

do $$
begin
  if not exists (
    select 1
    from pg_policies
    where schemaname = 'public'
      and tablename = 'registros'
      and policyname = 'Public can insert registrations'
  ) then
    create policy "Public can insert registrations"
      on public.registros
      for insert
      to anon
      with check (true);
  end if;
end
$$;
