import * as React from 'react';

import { cn } from '../lib/utils';

// H1 Component
const H1 = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, children, ...props }, ref) => (
  <h1
    ref={ref}
    className={cn(
      'scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl',
      className
    )}
    {...props}
  >
    {children}
  </h1>
));
H1.displayName = 'H1';

// H2 Component
const H2 = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, children, ...props }, ref) => ( 
  <h2
    ref={ref}
    className={cn(
      'scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0',
      className
    )}
    {...props}
  >
    {children} 
  </h2>
));
H2.displayName = 'H2';

// H3 Component
const H3 = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, children, ...props }, ref) => ( 
  <h3
    ref={ref}
    className={cn(
      'scroll-m-20 text-2xl font-semibold tracking-tight',
      className
    )}
    {...props}
  >
    {children} 
  </h3>
));
H3.displayName = 'H3';

// H4 Component
const H4 = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, children, ...props }, ref) => ( 
  <h4
    ref={ref}
    className={cn(
      'scroll-m-20 text-xl font-semibold tracking-tight',
      className
    )}
    {...props}
  >
    {children} 
  </h4>
));
H4.displayName = 'H4';

// P (Paragraph) Component
const P = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, children, ...props }, ref) => ( 
  <p
    ref={ref}
    className={cn('leading-7 [&:not(:first-child)]:mt-6', className)}
    {...props}
  >
    {children}
  </p>
));
P.displayName = 'P';

// Blockquote Component
const Blockquote = React.forwardRef<
  HTMLQuoteElement,
  React.HTMLAttributes<HTMLQuoteElement>
>(({ className, children, ...props }, ref) => ( 
  <blockquote
    ref={ref}
    className={cn('mt-6 border-l-2 pl-6 italic', className)}
    {...props}
  >
    {children} 
  </blockquote>
));
Blockquote.displayName = 'Blockquote';

// UL (Unordered List) Component
const Ul = React.forwardRef<
  HTMLUListElement,
  React.HTMLAttributes<HTMLUListElement>
>(({ className, children, ...props }, ref) => ( 
  <ul
    ref={ref}
    className={cn('my-6 ml-6 list-disc [&>li]:mt-2', className)}
    {...props}
  >
    {children} 
  </ul>
));
Ul.displayName = 'Ul';

// OL (Ordered List) Component
const Ol = React.forwardRef<
  HTMLOListElement,
  React.HTMLAttributes<HTMLOListElement>
>(({ className, children, ...props }, ref) => ( 
  <ol
    ref={ref}
    className={cn('my-6 ml-6 list-decimal [&>li]:mt-2', className)}
    {...props}
  >
    {children} {/* Render children */}
  </ol>
));
Ol.displayName = 'Ol';

// InlineCode Component
const InlineCode = React.forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement>
>(({ className, children, ...props }, ref) => ( 
  <code
    ref={ref}
    className={cn(
      'relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold',
      className
    )}
    {...props}
  >
    {children} 
  </code>
));
InlineCode.displayName = 'InlineCode';

// Lead Text Component
const Lead = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, children, ...props }, ref) => ( 
  <p
    ref={ref}
    className={cn('text-xl text-muted-foreground', className)}
    {...props}
  >
    {children} 
  </p>
));
Lead.displayName = 'Lead';

// Large Text Component
const Large = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => ( 
  <div ref={ref} className={cn('text-lg font-semibold', className)} {...props}>
    {children} 
  </div>
));
Large.displayName = 'Large';

// Small Text Component
const Small = React.forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement>
>(({ className, children, ...props }, ref) => (
  <small
    ref={ref}
    className={cn('text-sm font-medium leading-none', className)}
    {...props}
  >
    {children} 
  </small>
));
Small.displayName = 'Small';

// Muted Text Component
const Muted = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, children, ...props }, ref) => (
  <p
    ref={ref}
    className={cn('text-sm text-muted-foreground', className)}
    {...props}
  >
    {children}
  </p>
));
Muted.displayName = 'Muted';

export {
  H1,
  H2,
  H3,
  H4,
  P,
  Blockquote,
  Ul,
  Ol,
  InlineCode,
  Lead,
  Large,
  Small,
  Muted,
};