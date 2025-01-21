import { SimpleLayout } from '@/components/SimpleLayout'

export default function ExamplePage() {
  return (
    <SimpleLayout
      title="Example Title"
      intro="This is an example intro."
      titleFontSize="text-4xl sm:text-5xl"
      introFontSize="text-lg"
    >
      <p>Content goes here...</p>
    </SimpleLayout>
  )
}
