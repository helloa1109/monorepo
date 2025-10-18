'use client';

import { Button, Card, CardHeader, CardTitle, CardDescription, CardContent, Input } from '@mono/ui';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
            Welcome to Mono App
          </h1>
          
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>UI Components Demo</CardTitle>
                <CardDescription>Testing shared components</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <Input
                      label="Email"
                      type="email"
                      placeholder="Enter your email"
                      size="md"
                      maxLength={50}
                    />
                  </div>
                  
                  <div className="flex gap-4">
                    <Button size="sm" variant="primary">
                      Small Button
                    </Button>
                    <Button size="md" variant="secondary">
                      Medium Button
                    </Button>
                    <Button size="lg" variant="outline">
                      Large Button
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Monorepo Structure</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  This app demonstrates a monorepo structure with shared UI components,
                  types, and core utilities across multiple applications.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}
