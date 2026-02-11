type CompProps = React.PropsWithChildren<{
  title: string;
  description: string;
}>;


export const TitleBlock = ({ title, description, children }: CompProps) => {
  return (
    <div className="mb-5 lg:mb-8">
      <div className="flex justify-between mb-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">
            {title}
          </h1>
          <p className="text-muted-foreground mt-2">
            {description}
          </p>
        </div>
        {children}
        </div>
    </div>
  )
}