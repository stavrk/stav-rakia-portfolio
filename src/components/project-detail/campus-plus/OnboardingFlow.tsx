
export const OnboardingFlow = () => {
  return (
    <>
      <p className="text-muted-foreground mb-8">
        The app opens with a short and friendly onboarding flow, introducing users to the app's key features and what they can expect to find.
      </p>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="rounded-xl overflow-hidden border-2 border-border/50 shadow-md">
          <img src="/lovable-uploads/campus_onboarding1.jpg" alt="Onboarding Step 1" className="w-full h-auto" />
        </div>
        <div className="rounded-xl overflow-hidden border-2 border-border/50 shadow-md">
          <img src="/lovable-uploads/campus_onboarding2.jpg" alt="Onboarding Step 2" className="w-full h-auto" />
        </div>
        <div className="rounded-xl overflow-hidden border-2 border-border/50 shadow-md">
          <img src="/lovable-uploads/campus_onboarding3.jpg" alt="Onboarding Step 3" className="w-full h-auto" />
        </div>
        <div className="rounded-xl overflow-hidden border-2 border-border/50 shadow-md">
          <img src="/lovable-uploads/campus_onboarding4.jpg" alt="Onboarding Step 4" className="w-full h-auto" />
        </div>
      </div>
    </>
  );
};
