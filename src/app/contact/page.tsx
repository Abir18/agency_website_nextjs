import {Button} from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {Textarea} from "@/components/ui/textarea";

const ContactPage = () => {
  return (
    <div className="w-full">
      <section className="bg-muted py-12 md:py-20">
        <div className="container max-w-5xl px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6" data-aos="fade-right">
              <h2 className="text-3xl font-bold">Get in Touch</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold">Address</h3>
                  <p className="text-muted-foreground">
                    123 Main St, Anytown USA 12345
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Phone</h3>
                  <p className="text-muted-foreground">(123) 456-7890</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Email</h3>
                  <p className="text-muted-foreground">info@agency.com</p>
                </div>
              </div>
            </div>
            <div data-aos="fade-left">
              <Card className="shadow-lg">
                <CardHeader>
                  <h2 className="text-3xl font-bold">Contact Us</h2>
                  <CardTitle></CardTitle>
                  <CardDescription>
                    Fill out the form below and we&apos;ll get back to you as
                    soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" placeholder="Enter your name" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input id="subject" placeholder="Enter a subject" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        placeholder="Enter your message"
                        className="min-h-[150px]"
                      />
                    </div>
                    <Button type="submit" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
