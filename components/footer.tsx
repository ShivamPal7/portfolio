export function Footer() {
  return (
    <footer className="border-t">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center gap-4 py-10 md:h-24 md:flex-row md:justify-between md:py-0">
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              {new Date().getFullYear()} Shivam Pal. All rights reserved.
            </p>
          </div>
          <div className="w-full lg:auto text-center lg:text-right lg:ml-auto">
            <p className="text-sm text-muted-foreground">
              Built by Shivam Pal
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
