# Next.js App Router Client/Server Component Fix Guide

## The Core Issue
Next.js App Router strictly enforces the separation between Server Components and Client Components. The error "Error serializing props" occurs when:

1. **Server Components try to pass non-serializable props (like functions) to Client Components**
2. **Components without 'use client' try to use event handlers like onClick**
3. **Icon components are passed as props instead of being imported directly in client components**

## Solution Pattern

### 1. Create Client Wrapper Components
For any component that needs interactivity (onClick, useState, etc.), create a separate client component:

```tsx
// components/InteractiveWrapper.tsx
'use client';

export default function InteractiveWrapper({ data }) {
  // All client-side logic here
  return <div onClick={handleClick}>{data.content}</div>;
}
```

### 2. Keep Data in Server Components
Server components should only handle data fetching and pass serializable data:

```tsx
// app/page.tsx (Server Component)
export default async function Page() {
  const data = await fetchData();
  return <InteractiveWrapper data={data} />;
}
```

## Files That Need Fixes

### Already Fixed
✅ `/src/app/services/ai-portfolio/page.tsx` - Created PhaseTile and ServiceTierCard wrappers
✅ `/src/components/ai-portfolio/PhaseTile.tsx` - New client wrapper
✅ `/src/components/ai-portfolio/ServiceTierCard.tsx` - New client wrapper

### Still Need Fixes

#### 1. Experience Pages with State/Filters
These pages have search/filter functionality that needs client wrappers:

**`/src/app/experience/full-work-log/page.tsx`**
- Has search state, filters, and onClick handlers
- Already has 'use client' but may have serialization issues
- Check for any server/client boundary violations

**`/src/app/experience/page.tsx`**
- Check for any onClick handlers or interactive elements
- May need client wrapper components

#### 2. Service Detail Pages
**`/src/app/services/ai-portfolio/[serviceId]/page.tsx`**
- Dynamic route that may have client/server issues
- Check how icons are handled

**Other service pages:**
- `/src/app/services/software-development/page.tsx`
- `/src/app/services/pos-field-services/page.tsx`
- `/src/app/services/hardware-deployment/page.tsx`
- `/src/app/services/ai-automation/page.tsx`

#### 3. Home Page
**`/src/app/page.tsx`**
- Main landing page may have interactive tiles
- Check for onClick handlers

## Fix Checklist

### For Each Page:

1. **Check if it has 'use client' at the top**
   - If yes, ensure all imports are client-safe
   - If no, ensure NO client-side features are used

2. **Look for onClick handlers**
   - Move them to client wrapper components
   - Pass only data as props

3. **Check icon usage**
   - Icons should be imported in the component that uses them
   - Don't pass icon components as props from server to client

4. **Verify data files are serializable**
   - Export only strings, numbers, objects, arrays
   - No functions or React components

## Quick Fix Template

For pages with filters/search:

```tsx
// components/experience/WorkLogFilters.tsx
'use client';

import { useState } from 'react';

export default function WorkLogFilters({ initialData, children }) {
  const [search, setSearch] = useState('');
  const [filters, setFilters] = useState({});
  
  // All filter logic here
  
  return (
    <div>
      {/* Filter UI */}
      {children({ filteredData, search, setSearch })}
    </div>
  );
}
```

Then in the page:

```tsx
// app/experience/full-work-log/page.tsx
import WorkLogFilters from '@/components/experience/WorkLogFilters';

export default function Page() {
  const data = getWorkOrders();
  
  return (
    <WorkLogFilters initialData={data}>
      {({ filteredData }) => (
        <WorkOrdersList data={filteredData} />
      )}
    </WorkLogFilters>
  );
}
```

## Testing After Fixes

1. Run `npm run build` to check for errors
2. Check the build output for any serialization errors
3. Test all interactive features in development mode
4. Verify that static generation works for appropriate pages

## Prevention Tips

1. **Always separate concerns**: Data fetching in server components, interactivity in client components
2. **Use the 'use client' directive sparingly**: Only on components that truly need client features
3. **Pass primitive data**: Strings, numbers, plain objects - never functions or components
4. **Import icons directly**: Don't pass them through props across the server/client boundary

## Next Steps

1. Systematically go through each file listed above
2. Apply the fix pattern (create client wrappers where needed)
3. Test the build after each major fix
4. Ensure all interactive features still work

The key is maintaining a clear boundary between server components (data) and client components (interactivity).
