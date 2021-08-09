I talk about things on
[buttondown](https://buttondown.email/abatilo/archive). Read about my values on
my [/about](/about) page.

You can [email me](mailto:aaronbatilo@gmail.com) or you can [book on my calendar](https://calendar.aaronbatilo.dev) if you want to reach me directly!

### Things I've built

---

These are all projects that I've built for myself and not for the company I was
working for. For work history and experience, check out my [/resume](/resume)
or my [linkedin](https://www.linkedin.com/in/abatilo).

- [https://catfacts.aaronbatilo.dev](https://catfacts.aaronbatilo.dev), Get a
  daily SMS message with a fact about cats. Fully open sourced at
  [https://github.com/abatilo/catfacts](https://github.com/abatilo/catfacts)
- [https://coloradoexcluded.com](https://coloradoexcluded.com), A website that
  lists companies that are avoiding hiring in the state of Colorado. Featured
  on the [Wall Street
  Journal](https://www.wsj.com/articles/many-companies-want-remote-workersexcept-from-colorado-11623937649?reflink=desktopwebshare_permalink),
  [The Colorado
  Sun](https://coloradosun.com/2021/06/19/colorado-job-openings-salary-equal-pay-unemployment/),
  and [Denver's
  9News](https://www.9news.com/video/news/local/next/website-tracks-companies-exclude-colorado-applicants-salary-requirement-law/73-ffbab2e6-bbd3-4118-b99f-c5a85361e983).
  Built with a React + TypeScript + [Tailwind](https://tailwindui.com/) frontend, with a gRPC + gRPC
  gateway Go backend on AWS EKS, and AWS Serverless Aurora.
- [pulumi-composite-actions](https://github.com/abatilo/pulumi-composite-actions),
  an alternative to the official Pulumi GitHub Actions that supports commenting
  on a pull request only when there's detected changes as well as Pulumi's
  internal S3 state locking with built in retries.
- [EC2Throughput](https://ec2throughput.info), learn what it means for an EC2
  instance to have ”Up to N Gigabit” network performance. All benchmarks are
  ran automatically and published to the website immediately after tests
  complete. EC2 instances are orchestrated with Pulumi. Website is React +
  TypeScript + Next.js hosted on Vercel.
- [github-action-locks](https://github.com/abatilo/github-action-locks),
  DynamoDB based locking for use in a GitHub Actions workflow to guarantee
  atomic execution of your GitHub Actions. Go binary that interacts with
  AWS DynamoDB.
- [PR preview deployments](https://github.com/abatilo/streamlit-preview-environments-demo),
  a demo project where I demonstrate an implementation of [Heroku's Review
  Apps](https://devcenter.heroku.com/articles/github-integration-review-apps)
  and [FeaturePeek](https://featurepeek.com/) for container based web services.
  Go application that would receive webhooks to trigger a file system
  refresh. Proof of concept implementations with Istio and Traefik ingress.
- [Actions Panel](https://github.com/apps/actionspanel), former GitHub App for managing
  manual execution of GitHub Actions. GitHub themselves, Microsoft, Docker,
  Tidal Music, MGM Resorts and over 200 other users had the GitHub App
  installed before GitHub released the feature themselves 6 months after
  launch. React + TypeScript + [Primer](https://github.com/primer/components)
  frontend with a RESTful Go backend. Click [here](/actionspanel-preview.png)
  for an old screenshot.
- [actions-poetry](https://github.com/abatilo/actions-poetry), a GitHub Action
  for executing [poetry](https://github.com/python-poetry/poetry) the Python
  package management tool. It's been kept up to date with GitHub Action best
  practices.
- [readinglevel.app](https://readinglevel.app), analyze text for estimated
  reading comprehension requirements.
- [typed-json-dataclasses](https://github.com/abatilo/typed-json-dataclass),
  zero configuration strong typing for data models and json SerDe your
  @dataclasses. On PyPI.
