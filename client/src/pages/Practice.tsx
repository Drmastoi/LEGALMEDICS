import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Practice: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Header />
      <main>
        <div className="py-16 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src={require('@assets/practice-hero.svg')} 
              alt="Practice Hero Background" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/60"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-4xl font-bold text-center text-white mb-4 text-shadow">
              Practice Resources
            </h1>
            <p className="text-xl text-center text-white text-shadow max-w-3xl mx-auto">
              Free tools and resources to help you enhance your medico-legal skills and prepare for MedCo accreditation
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <Tabs defaultValue="practice-cases">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="practice-cases">Practice Cases</TabsTrigger>
              <TabsTrigger value="templates">Report Templates</TabsTrigger>
              <TabsTrigger value="quizzes">Assessment Quizzes</TabsTrigger>
            </TabsList>
            
            <TabsContent value="practice-cases">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Case Study 1: Whiplash Injury</CardTitle>
                    <CardDescription>Rear-end collision with neck and shoulder symptoms</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      A 35-year-old female involved in a rear-end collision at approximately
                      15mph. Presenting with neck pain, stiffness, and referred pain to left shoulder.
                    </p>
                    <div className="bg-gray-100 p-3 rounded-md mb-4">
                      <p className="text-sm text-gray-700">
                        <strong>Difficulty:</strong> Beginner
                      </p>
                      <p className="text-sm text-gray-700">
                        <strong>Focus Areas:</strong> WAD II assessment, prognosis estimation
                      </p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Access Case Study</Button>
                  </CardFooter>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Case Study 2: Multiple Injuries</CardTitle>
                    <CardDescription>Side impact collision with multiple soft tissue injuries</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      A 42-year-old male involved in a side impact collision. Presenting with
                      neck, back, and shoulder injuries plus psychological symptoms of travel anxiety.
                    </p>
                    <div className="bg-gray-100 p-3 rounded-md mb-4">
                      <p className="text-sm text-gray-700">
                        <strong>Difficulty:</strong> Intermediate
                      </p>
                      <p className="text-sm text-gray-700">
                        <strong>Focus Areas:</strong> Multiple injury assessment, psychological impacts
                      </p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Access Case Study</Button>
                  </CardFooter>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Case Study 3: Complex History</CardTitle>
                    <CardDescription>Crash with pre-existing conditions and causation issues</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      A 58-year-old with pre-existing degenerative changes involved in a
                      moderate impact collision. Presenting with exacerbation of chronic pain.
                    </p>
                    <div className="bg-gray-100 p-3 rounded-md mb-4">
                      <p className="text-sm text-gray-700">
                        <strong>Difficulty:</strong> Advanced
                      </p>
                      <p className="text-sm text-gray-700">
                        <strong>Focus Areas:</strong> Causation assessment, pre-existing conditions
                      </p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Access Case Study</Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="templates">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>MedCo Standard Report Template</CardTitle>
                    <CardDescription>Compliant with MedCo requirements for RTA soft tissue claims</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      A comprehensive template for producing standardized medico-legal reports
                      that meet all MedCo requirements for RTA soft tissue injury claims.
                    </p>
                    <ul className="list-disc pl-5 text-sm text-gray-600">
                      <li>Pre-formatted sections with guidance notes</li>
                      <li>Standardized examination structure</li>
                      <li>Prognosis formulation guidance</li>
                      <li>Compliant declaration sections</li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Download Template</Button>
                  </CardFooter>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Psychological Assessment Addendum</CardTitle>
                    <CardDescription>Template for documenting psychological sequelae</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      A specialized template for assessing and documenting psychological
                      symptoms following RTA incidents, including travel anxiety, sleep disturbance,
                      and other common manifestations.
                    </p>
                    <ul className="list-disc pl-5 text-sm text-gray-600">
                      <li>Structured psychological symptom screening</li>
                      <li>Severity and duration assessment tools</li>
                      <li>Referral recommendation framework</li>
                      <li>Treatment options summary</li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Download Template</Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="quizzes">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>MedCo Regulations Quiz</CardTitle>
                    <CardDescription>Test your knowledge of MedCo requirements</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      20 multiple-choice questions covering the regulatory framework,
                      reporting requirements, and ethical obligations for MedCo experts.
                    </p>
                    <div className="flex justify-between text-sm text-gray-600 my-2">
                      <span>Time: 30 minutes</span>
                      <span>Questions: 20</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Start Quiz</Button>
                  </CardFooter>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Clinical Assessment Quiz</CardTitle>
                    <CardDescription>Test your diagnostic and examination skills</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Case-based questions focused on clinical assessment techniques,
                      differential diagnosis, and appropriate examination procedures for RTA injuries.
                    </p>
                    <div className="flex justify-between text-sm text-gray-600 my-2">
                      <span>Time: 45 minutes</span>
                      <span>Questions: 15</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Start Quiz</Button>
                  </CardFooter>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Report Writing Quiz</CardTitle>
                    <CardDescription>Test your medico-legal writing skills</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Review sample report segments and identify errors, omissions,
                      and improvements. Focused on clarity, objectivity, and proper terminology.
                    </p>
                    <div className="flex justify-between text-sm text-gray-600 my-2">
                      <span>Time: 40 minutes</span>
                      <span>Questions: 10</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Start Quiz</Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Practice;