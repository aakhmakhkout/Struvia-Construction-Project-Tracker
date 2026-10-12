# Struvia

A construction project tracker built with React and Redux Toolkit. It's a frontend project: the goal was to build a multi-role dashboard where state management does the heavy lifting, without waiting on a backend.

You pick a role on the landing page (Client, Contractor, or Worker) and get a dashboard scoped to that role. Contractors get the most: they can create projects, manage a team, post updates, and handle tasks. Clients and workers see a read-focused view of the project they're attached to.

## What it does

- **Role-based entry.** Landing page routes into the app as Client, Contractor, or Worker. The role is stored in Redux and read across the layout, navbar, and pages. You can switch roles from the navbar.
- **Projects.** Contractors can create, filter by status tab, and delete projects, with a cover image and assigned team members.
- **Teams.** Add and remove team members, then assign them to projects.
- **Tasks.** Tasks move through To Do, In Progress, In Review, and Completed.
- **Project updates.** Contractors post updates that feed the dashboard's recent activity.
- **Photos.** Photo albums per project, with search, pagination, and an upload modal.
- **Dashboard.** Status card, recent activity, upcoming tasks, and a few preview panels, all driven by whichever project is selected in the navbar.

## Stack

React 19, Vite, Redux Toolkit, React Router 7, Tailwind CSS 4, Motion, Lucide icons, and Supabase Storage for image uploads.

## Running it locally

```bash
git clone <repo-url>
cd struvia
npm install
```

Create a `.env` file in the project root:

```
VITE_SUPABASE_URL=your-project-url
VITE_SUPABASE_PUBLISHABLE_KEY=your-publishable-key
```

You'll also need a public Storage bucket named `struvia-media` in your Supabase project. It's used for project cover images and team member photos.

Then:

```bash
npm run dev
```

Other scripts: `npm run build`, `npm run preview`, `npm run lint`.

## How it's put together

```
src/
  components/   UI grouped by feature (dashboard, projects, tasks, photos, layout)
  pages/        Route-level pages
  redux/        Slices for auth, projects, tasks, teams, updates, photos, layout
  routes/       Route definitions
  lib/          Supabase client
  data/         Seed user data
```

Each feature has its own slice, and the app lives under a `/home` layout (sidebar + navbar) with nested routes for dashboard, projects, tasks, photos, and punch list.

## Things worth knowing

- **There's no real authentication.** The three users are hardcoded in `src/data/usersData.js`, and "logging in" just means choosing a role.
- **Data lives in localStorage.** Projects, tasks, teams, updates, and albums are persisted in the browser through Redux. Supabase is only used for storing image files, so clearing site data clears your projects.
- **Punch list is a stub.** The route and some preview components exist, but the page itself isn't built yet.
- **Dashboard seed content is placeholder.** A few panels (recent activity, upcoming tasks, punch list preview) still read from static sample data.

## What I'd do next

Move project data into a Supabase database, add real auth with row-level access per role, and finish the punch list.

## Author

Noumaan Nabi — [GitHub](https://github.com/aakhmakhkout)
