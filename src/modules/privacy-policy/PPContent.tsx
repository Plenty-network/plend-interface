import { Paper, styled, Typography } from '@mui/material';
import { Link } from 'src/components/primitives/Link';

const MarkedList = styled('ol')`
  margin: 0;
  counter-reset: list;
  & li {
    list-style: none;
    counter-increment: list;
    padding-left: 1rem;
  }
  & li:not(:last-child) {
    margin-bottom: 0.25rem;
  }
  &.lower-roman > li::marker {
    content: '(' counter(list, lower-roman) ')';
  }
  &.lower-alpha > li::marker {
    content: '(' counter(list, lower-alpha) ')';
  }
  &.mb-1 {
    margin-bottom: 1rem;
  }
`;

const PPContent = (): JSX.Element => {
  return (
    <Paper sx={{ px: { xs: 4, xsm: 6 }, py: { xs: 3.5, xsm: 4 } }}>
      <Typography variant="h2" mb={4} align="center">
        Dalbati Foundation (the Foundation)
      </Typography>
      <Typography variant="h2" mb={4} align="center">
        DATA PROTECTION PRIVACY NOTICE{' '}
      </Typography>
      <Typography mb={4}>
        The Foundation, registered in the British Virgin Islands (<strong>BVI</strong>), is
        dedicated to the protection of personal data in compliance with the BVI Data Protection Act.
        Our commitment to safeguarding your privacy is paramount, and this notice details our
        practices regarding the collection, use, and management of your personal data. Our principal
        and registered office is located at 1st Floor, Commerce House, 181 Main Street, PO Box 472,
        Road Town, Tortola, VG1110, British Virgin Islands. Craigmuir Chambers, Road Town, Tortola,
        VG 1110, serves as our initial location, and Harneys Corporate Services Limited, at P.O. Box
        71, Road Town, Tortola, VG 1110, is our first registered agent.
      </Typography>
      <Typography mb={4}>
        This privacy notice applies to you if (i) you access and/or use the website (the{' '}
        <strong>Website</strong>) and front-end provided by the Foundation to interact with the
        Plend Protocol (the <strong>Front-End</strong>), including by connecting your digital assets
        wallet to the Front-End; (ii) your personal data has been provided to the Foundation by
        another person; or (iii) the Foundation otherwise uses your personal data. This privacy
        notice sets out the basis on which personal data about you will be processed by the
        Foundation. Please take the time to read and understand this privacy notice.
      </Typography>

      <Typography variant="h3" mb={4}>
        Uses of your personal data
      </Typography>
      <Typography mb={4}>
        Your personal data may be stored and processed by the Foundation for the following purposes:
      </Typography>
      <MarkedList className="lower-alpha mb-1">
        <li>
          <Typography>
            Assessing and processing your access to and use of the Website and the Front-End,
            including performing know-your-client procedures, enabling access to or continued use of
            the Front-End, and overseeing these processes;
          </Typography>
        </li>
        <li>
          <Typography>
            General business administration, including communicating with you, audit services, risk
            monitoring, the administration of IT systems and monitoring and improving products; and
          </Typography>
        </li>
        <li>
          <Typography>
            Compliance with legal and regulatory obligations and industry standards, including
            know-your-client procedures, the automatic exchange of tax information and legal
            judgments.
          </Typography>
        </li>
      </MarkedList>
      <Typography mb={4}>
        The Foundation is entitled to process your personal data in these ways for the following
        reasons:
      </Typography>
      <MarkedList className="lower-alpha mb-1">
        <li>
          <Typography>
            Processing may be necessary to discharge a relevant legal or regulatory obligation;
          </Typography>
        </li>
        <li>
          <Typography>
            The processing will, in all cases, be necessary for the legitimate business interests of
            the Foundation, such as:
          </Typography>
          <MarkedList className="lower-roman">
            <li>
              <Typography>
                carrying out the ordinary or reasonable business activities of the Foundation, or
                other activities referred to in this privacy notice;
              </Typography>
            </li>
            <li>
              <Typography>
                ensuring compliance with all legal and regulatory obligations and industry
                standards, and preventing fraud;
              </Typography>
            </li>
            <li>
              <Typography>
                establishing, exercising or defending legal rights or for other purposes relating to
                legal proceedings; and
              </Typography>
            </li>
            <li>
              <Typography>ensuring the security of information systems.</Typography>
            </li>
          </MarkedList>
        </li>
        <li>
          <Typography>
            You have given your explicit consent (this basis is used only exceptionally).
          </Typography>
        </li>
        <li>
          <Typography>
            In respect of any processing of sensitive personal data falling within special
            categories, such as any personal data relating to the political opinions of a
            politically exposed person, the processing will be subject to additional safeguards.
          </Typography>
        </li>
      </MarkedList>

      <Typography variant="h3" mb={4}>
        Personal data that the Foundation might use
      </Typography>
      <Typography mb={4}>
        The Foundation might process the following personal data about you:
      </Typography>
      <MarkedList className="lower-alpha mb-1">
        <li>
          <Typography>
            Information provided to the Foundation by you which might include your name and address
            (including proofs of name and address), contact details, digital assets wallet address,
            date of birth, gender, nationality, photograph, signature, occupational history, and job
            title. Such information might be provided in an application form or in other documents
            (as part of an application process or at other times), face-to-face, by telephone, by
            email or otherwise;
          </Typography>
        </li>
        <li>
          <Typography>
            Information that the Foundation collects or generates which might include information
            relating to your use of the Website and the Front-End, your IP address, emails (and
            related data), call recordings and website usage data and messages submitted through the
            Administrator’s website; and
          </Typography>
        </li>
        <li>
          <Typography>
            Information that the Foundation obtains from other sources which might include
            information obtained for the purpose of the Foundation’s know-your-client procedures
            (which include anti-money laundering procedures, counter-terrorist financing procedures,
            politically-exposed-person checks, sanctions checks, among other things), information
            from public websites and other public sources and information received from the
            applicant’s advisers or from intermediaries.
          </Typography>
        </li>
      </MarkedList>

      <Typography variant="h3" mb={4}>
        Disclosure of your personal data to third parties
      </Typography>
      <Typography mb={4}>
        The Foundation may from time to time, in accordance with the purposes described above,
        disclose your personal data to other parties, including professional advisers such as law
        firms and accountancy firms, other service providers of the Foundation, technology service
        providers, counterparties and courts and regulatory, tax and governmental authorities. Some
        of these persons will process your personal data in accordance with the Foundation’s
        instructions and others will themselves be responsible for their use of your personal data.
        These persons may be permitted to further disclose the personal data to other parties
      </Typography>

      <Typography variant="h3" mb={4}>
        Transfers of your personal data outside the BVI
      </Typography>
      <Typography mb={4}>
        Your personal data may be transferred to and stored by persons outside the BVI, and in
        particular may be transferred to and stored by affiliates or service providers of the
        Foundation outside the BVI.
      </Typography>
      <Typography mb={4}>
        Where personal data is transferred outside the BVI, the Foundation will ensure that the
        transfer is subject to appropriate safeguards or is otherwise permitted under applicable
        law. For example, in the context of personal data transferred outside the BVI, the country
        to which the personal data is transferred may be a European Economic Area member, a country
        approved by the European Commission or the recipient may have agreed to model contractual
        clauses approved by the European Commission that oblige them to protect the personal data.
      </Typography>
      <Typography mb={4}>
        You can obtain more details of the protection given to your personal data when it is
        transferred outside the BVI or the European Economic Area, including a copy of any standard
        data protection clauses entered into with recipients of your personal data, by contacting
        the Foundation using the details set out under “Contacting the Foundation” below.
      </Typography>

      <Typography variant="h3" mb={4}>
        Necessity of personal data for access to and use of the Website and the Front-End
      </Typography>
      <Typography mb={4}>
        The provision of certain personal data may be necessary to allow you to access and use the
        Website and the Front-End and for compliance by the Foundation and its service providers
        with certain legal and regulatory obligations. Accordingly, if certain personal data is not
        provided when requested, or you block access to such personal data being automatically
        collected, your ability to access and use the Website and the Front-End may be prevented or
        suspended.
      </Typography>

      <Typography variant="h3" mb={4}>
        Retention of personal data
      </Typography>
      <Typography mb={4}>
        How long the Foundation holds your personal data for will vary. The retention period will be
        determined by various criteria, including the purposes for which the Foundation is using it
        (as it will need to be kept for as long as is necessary for any of those purposes) and legal
        obligations (as laws or regulations may set a minimum period for which the Foundation has to
        keep your personal data).
      </Typography>

      <Typography variant="h3" mb={4}>
        Your rights
      </Typography>
      <Typography mb={4}>
        You have a number of legal rights in relation to the personal data that the Foundation holds
        about you. These rights include the following:
      </Typography>
      <MarkedList className="lower-alpha mb-1">
        <li>
          <Typography>
            The right to obtain information regarding the processing of your personal data and
            access to the personal data that the Foundation holds about you.
          </Typography>
        </li>
        <li>
          <Typography>
            The right to request that the Foundation rectifies your personal data if it is
            inaccurate or incomplete.
          </Typography>
        </li>
        <li>
          <Typography>
            The right to object to, and the right to request that the Foundation restricts, its
            processing of your personal data in certain circumstances. There may be circumstances
            where you object to, or ask the Foundation to restrict, its processing of your personal
            data but the Foundation is legally entitled to continue processing your personal data or
            to refuse that request.
          </Typography>
        </li>
        <li>
          <Typography>
            The right to ask the Foundation not to subject you to automated decision making that
            uses your personal data.
          </Typography>
        </li>
        <li>
          <Typography>
            The right to object to the Foundation using your personal data for direct marketing
            purposes.
          </Typography>
        </li>
        <li>
          <Typography>
            The right to lodge a complaint with the data protection regulator (details of which are
            provided below) if you think that any of your rights have been infringed by the
            Foundation.
          </Typography>
        </li>
      </MarkedList>
      <Typography mb={4}>
        You can exercise your rights by contacting the Foundation using the details set out under
        “Contacting the Foundation” below. You can also find out more information about your rights
        under applicable BVI data protection law by contacting the BVI Ombudsman, the data regulator
        in the BVI.
      </Typography>

      <Typography variant="h3" mb={4}>
        Contacting the Foundation
      </Typography>
      <Typography mb={4}>
        If you would like further information on the collection, use, disclosure, transfer or
        processing of your personal data or the exercise of any of the rights listed above, please
        address questions and requests to:{' '}
        <Link href="mailto:contact@dalbati.foundation" sx={{ textDecoration: 'underline' }}>
          contact@dalbati.foundation
        </Link>
        .
      </Typography>
      <Typography variant="h3" mb={4}>
        Updates to This Notice
      </Typography>
      <Typography mb={4}>
        This notice may be updated to reflect changes in our data processing practices or legal
        requirements.
      </Typography>
    </Paper>
  );
};

export default PPContent;
