import { Paper, styled, Typography } from '@mui/material';
import MarkedList from 'src/components/lists/MarkedList';
import MarkedListItem from 'src/components/lists/MarkedListItem';
import { Link } from 'src/components/primitives/Link';

const Underlined = styled('span')(() => ({
  textDecoration: 'underline',
}));

const TOSContent = (): JSX.Element => {
  return (
    <Paper sx={{ px: { xs: 4, xsm: 6 }, py: { xs: 3.5, xsm: 4 } }}>
      <Typography mb={4} fontWeight={600}>
        ATTENTION: USE OF THE CREDIT PROTOCOL FUNCTIONS OF THE SITE BY PERSONS WHO ARE CURRENTLY OR
        ORDINARILY LOCATED OR RESIDENT IN THE UNITED STATES IS STRICTLY PROHIBITED, REGARDLESS OF
        THE USER'S IP ADDRESS. UTILIZING A VIRTUAL PRIVATE NETWORK OR OTHER METHOD TO CONCEAL A
        USER'S UNITED STATES RESIDENCE IS ALSO STRICTLY PROHIBITED AND MAY RESULT IN PERMANENT
        BLOCKING OF USE OF THE SITE IN CONNECTION WITH BLOCKCHAIN ADDRESSES SUSPECTED OF BEING TIED
        TO A UNITED STATES RESIDENCE.
      </Typography>

      <Typography>
        <strong>Date of Initial Publication</strong>: March 25, 2023.
      </Typography>
      <Typography mb={4}>
        <strong>Last Updated</strong>: March 25, 2023.
      </Typography>

      <Typography>
        These terms and conditions (these{' '}
        <strong>
          <em>“Terms”</em>
        </strong>
        ) constitute a binding legal agreement between each individual, entity, group or association
        who views, interacts, links to or otherwise uses or derives any benefit from the Site (as
        defined below) (
        <strong>
          <em>“Users”</em>
        </strong>
        ) and Dalbati Foundation, a BVI exempted foundation company (the owner/operator of the Site)
        (collectively with its successors and assigns, the{' '}
        <strong>
          <em>“Site Operator”</em>
        </strong>
        ).
      </Typography>
      <Typography mb={4}>
        Please contact us on Discord, the forums, or at{' '}
        <Link href="mailto:contact@dalbati.foundation">contact@dalbati.foundation</Link> for any
        questions or issues.
      </Typography>

      <Typography variant="h3" align="center" mb={4}>
        SUMMARY
      </Typography>
      <Typography mb={4}>
        Among other things, the Terms and Conditions provide that you must:
      </Typography>
      <MarkedList markerType="disc" name="summary" sx={{ mb: 4 }}>
        <MarkedListItem>
          be at least eighteen years of age, of sound mental capacity and have all technical
          knowledge necessary or advisable to understand and evaluate the risks of the Site and
          Plend;
        </MarkedListItem>
        <MarkedListItem>
          agree that the Site is provided for informational purposes only and is not directly or
          indirectly in control of or capable of interacting with Etherlink Mainnet, Plend Altchains
          and related Blockchain Systems or performing or effecting any transactions on your behalf;
        </MarkedListItem>
        <MarkedListItem>
          agree that the Site is only being provided as an aid to your own independent research and
          evaluation of Plend and that no representation or warranty is being made as to the
          accuracy or completeness of information on the Site;
        </MarkedListItem>
        <MarkedListItem>
          agree that the ability of the Site to connect with third-party wallet applications or
          devices is not an endorsement or recommendation thereof by or on behalf of the Site
          Operator, and you must assume all responsibility for selecting and evaluating and
          incurring the risks of any bugs, defects, malfunctions or interruptions of any third-party
          wallet applications or devices you directly or indirectly use in connection with the Site;
        </MarkedListItem>
        <MarkedListItem>comply with all applicable laws, rules and regulations;</MarkedListItem>
        <MarkedListItem>
          not be currently or ordinarily located or resident in (or incorporated or organized in)
          the United States or an individual or entity subject to national or international
          sanctions under the laws of the BVI, United Kingdom or other applicable laws;
        </MarkedListItem>
        <MarkedListItem>
          not hold the Site Operator or any of its representatives or affiliates liable for any
          damages you suffer in connection with your use of the Site or Plend;
        </MarkedListItem>
        <MarkedListItem>
          waive your right to initiate or participate in class actions relating to the Site; and
        </MarkedListItem>
        <MarkedListItem>
          resolve any disputes regarding the Site pursuant to binding, confidential arbitration and
          waive your right to a jury trial in connection with such disputes.
        </MarkedListItem>
      </MarkedList>
      <Typography mb={4}>
        The above is only a partial summary. You should read the{' '}
        <strong>Terms and Conditions in their entirety</strong>. In the event of any conflict or
        consistency on between this summary and the Terms and Conditions relating to any issue, the
        Terms and Conditions will be determinative of the issue.
      </Typography>

      <Typography variant="h3" align="center" mb={4}>
        SITE OVERVIEW
      </Typography>
      <MarkedList markerType="decimal" name="siteoverview" sx={{ mb: 4 }}>
        <MarkedListItem disableTypography>
          <Typography mb={4} sx={{ fontWeight: 600, textDecoration: 'underline' }}>
            About the Site
          </Typography>
          <Typography mb={4}>
            The Site aggregates and publishes publicly available third-party information about:
          </Typography>
          <MarkedList markerType="disc" name="thirdpartyinformation" sx={{ mb: 4 }}>
            <MarkedListItem>the Etherlink Mainnet;</MarkedListItem>
            <MarkedListItem>
              the Plend Smart Contract System, Plend Smart Contract Protocol, Plend Mainnet, and
              Plend Altchains;
            </MarkedListItem>
            <MarkedListItem>
              tokens that exist and have been or may be made available for withdrawal or “borrowing”
              by third parties known as “lenders” or “depositors” in connection with the Plend Smart
              Contract System;
            </MarkedListItem>
            <MarkedListItem>
              third-party smart contract systems that act as “borrowers” or “lenders” in
              contract-to-contract (C2C) transactions of the Plend Smart Contract Systems;
            </MarkedListItem>
            <MarkedListItem>
              the implied or express fair market prices of tokens, which may be denominated in terms
              of other tokens; and
            </MarkedListItem>
            <MarkedListItem>
              transaction records relating to the Plend Smart Contract System.
            </MarkedListItem>
          </MarkedList>
          <Typography mb={4}>
            The Site also offers interaction methods whereby the User can indicate a transaction the
            User would like to perform in connection with the Plend Smart Contract System (such as
            swapping one token for another).
          </Typography>
          <Typography mb={4}>
            When used in this way, the Site can generate a draft transaction message which the User
            can independently use in conjunction with a third-party wallet application or device to
            conduct transactions on Etherlink Mainnet or Plend Altchains.
          </Typography>
        </MarkedListItem>
        <MarkedListItem disableTypography>
          <Typography mb={4} sx={{ fontWeight: 600, textDecoration: 'underline' }}>
            About Plend
          </Typography>
          <Typography mb={4}>
            The Plend Smart Contract Protocol is software source code freely licensed to the public,
            which provides a decentralized “credit” protocol through which tokens can be ‘loaned'
            and ‘borrowed'. The Plend Smart Contract System is a copy of the Plend Smart Contract
            Protocol that has been compiled to bytecode and permanently associated with one or more
            specific public addresses on Etherlink Mainnet and Plend Altchains. Through a compatible
            third-party wallet application or device, Etherlink Mainnet Node or node compatible with
            a Plend Altchain, as applicable, any User may pay Etherlink Mainnet Validators or other
            validators on the appropriate Blockchain System to operate and record the results of the
            Plend Smart Contract System in accordance with the User's instructions, thus
            effectuating token transactions.
          </Typography>
        </MarkedListItem>
        <MarkedListItem disableTypography>
          <Typography mb={4} sx={{ fontWeight: 600, textDecoration: 'underline' }}>
            Relationship to Plend Smart Contract System
          </Typography>
          <Typography mb={4}>
            Using Plend Mainnet, Plend Altchains, Etherlink Mainnet, or the Plend Smart Contract
            System does not require use of the Site. The Site aggregates and publishes publicly
            available information about the Plend Smart Contract System in a user- friendly and
            convenient format. Such information is also independently available from other
            sources—for example, a person may directly review transaction history, account balances
            and the Plend Smart Contract System on a compatible block explorer for Etherlink Mainnet
            or a Plend Altchain.
          </Typography>
          <Typography mb={4}>
            By combining publicly available information with the User's interactions with the Site,
            the Site can draft standard transaction messages compatible with the Plend Smart
            Contract System which are designed to accomplish the User's operational goals as
            expressed through the interactions. If the User so wishes, the User may broadcast such
            messages in order to initiate token transactions.
          </Typography>
          <Typography mb={4}>
            All draft transaction messages are delivered by the Site via API to a compatible
            third-party wallet application or device selected by the User after pressing the
            “Connect Wallet” (or similar) button on the Site. The User must personally review and
            authorize all transaction messages that the User wishes to send to Plend Mainnet, Plend
            Altchains or other blockchain systems; this requires the User to sign the relevant
            transaction message with a private cryptographic key inaccessible to the Site. The User-
            authorized message will then be broadcast to Validators through the wallet application
            or device and the User may pay a network fee to have the Validators apply the
            transaction message to the Plend Smart Contract System and record the results on the
            appropriate blockchain—resulting in a token transaction being completed on that
            blockchain.
          </Typography>
          <Typography mb={4}>
            The Site Operator and the Site are not agents or intermediaries of the User, do not
            store or have access to or control over any tokens, private keys, passwords, accounts or
            other property of the User, and are not capable of performing transactions or sending
            transaction messages on behalf of the User. The Site does not hold and cannot purchase,
            sell or trade any tokens. All transactions relating to the Plend Smart Contract System
            are effected and recorded solely through the interactions of the User with the
            respective Validators, who are not under the control of or affiliated with the Site
            Operator or the Site.
          </Typography>
        </MarkedListItem>
        <MarkedListItem disableTypography>
          <Typography mb={4} sx={{ fontWeight: 600, textDecoration: 'underline' }}>
            Disclaimers and Disclosures
          </Typography>
          <Typography mb={4}>
            Important disclaimers and disclosures regarding the subject material of the Site can be
            found in Section 6. You should familiarize yourself with these disclaimers and
            disclosures and conduct your own thorough due diligence into the Plend Smart Contract
            Protocol before using the Site.
          </Typography>
        </MarkedListItem>
      </MarkedList>

      <Typography variant="h3" align="center" mb={4}>
        BINDING PROVISIONS
      </Typography>
      <MarkedList markerType="decimal" name="bindingprovisions">
        <MarkedListItem disableTypography>
          <Typography mb={4} sx={{ fontWeight: 600, textDecoration: 'underline' }}>
            Certain Defined Terms
          </Typography>
          <MarkedList markerType="decimal" name="definedterms" sx={{ mb: 4 }}>
            <MarkedListItem>
              <strong>“Blockchain”</strong> means a blockchain or distributed ledger technology or
              other similar technology.
            </MarkedListItem>
            <MarkedListItem>
              <strong>“Blockchain System”</strong> means the combination of (i) a Blockchain; and
              (ii) a network of devices operating software clients or software applications that
              jointly or individually store, validate, process transactions with respect to, update,
              resolve forks with respect to and otherwise maintain, read from and write to such
              Blockchain
            </MarkedListItem>
            <MarkedListItem>
              <strong>“Blockchain Tokens”</strong> means virtual currencies, tokens and other units
              of account or mediums of exchange that are implemented on a Blockchain System.
            </MarkedListItem>
            <MarkedListItem>
              <strong>“$ETH”</strong> means the Blockchain Tokens native to Etherlink Mainnet and
              the staking of which impacts which Etherlink Mainnet Nodes have the ability to propose
              and validate new blocks on the Etherlink Mainnet blockchain.
            </MarkedListItem>
            <MarkedListItem>
              <strong>“Etherlink Mainnet Nodes”</strong> means, at each time, the internet-connected
              computers then running unaltered and correctly configured instances of the Etherlink
              Mainnet.
            </MarkedListItem>
            <MarkedListItem>
              <strong>“Etherlink Mainnet”</strong> means, at each time, the canonical blockchain and
              virtual machine environment of the Etherlink Protocol ‘mainnet', as recognized by at
              least a majority of the Etherlink Mainnet Nodes then being operated in good faith in
              the ordinary course of the network. As of the date of these Terms, the Etherlink
              Mainnet is the network associated with Chain ID ‘X' and Network ID ‘X'.
            </MarkedListItem>
            <MarkedListItem>
              <strong>“Etherlink Protocol”</strong> means the most up-to-date production release of
              Etherlink Mainnet client software.
            </MarkedListItem>
            <MarkedListItem>
              <strong>“Etherlink Mainnet Validators”</strong> means, at each time, the Etherlink
              Mainnet Nodes selected as a validator for Etherlink Mainnet at such time.
            </MarkedListItem>
            <MarkedListItem>
              <strong>“Plend”</strong> means, collectively, the Plend Smart Contract Protocol, Plend
              Mainnet, Plend Smart Contract Systems, and Plend Altchains.
            </MarkedListItem>
            <MarkedListItem>
              <strong>“Plend Altchains”</strong> means Plend Smart Contract Systems deployed to
              Blockchain Systems other than the Etherlink Mainnet.
            </MarkedListItem>
            <MarkedListItem>
              <strong>“Plend Mainnet”</strong> means Plend Smart Contract Systems deployed to
              Etherlink Mainnet.
            </MarkedListItem>
            <MarkedListItem>
              <strong>“Plend Smart Contract Protocol”</strong> means the source code for
              Blockchain-based smart contracts at{' '}
              <Link href="https://github.com/Plenty-network/plend-core-contracts">
                https://github.com/Plenty-network/plend-core-contracts
              </Link>{' '}
              intended to be deployed to Etherlink Mainnet or Plend Altchains.
            </MarkedListItem>
            <MarkedListItem>
              <strong>“Plend Smart Contract Systems”</strong> means all blockchain-based smart
              contract bytecodes that: (i) are compiled from the Plend Smart Contract Protocol (or
              any part thereof); and (ii) are deployed to production Blockchain Systems.
            </MarkedListItem>
            <MarkedListItem>
              <strong>“Site”</strong> means the web site, web pages, web applications and
              information and software available at or accessible through the URLs{' '}
              <Link href="https://www.Plendprotocol.io/">https://www.Plendprotocol.io/</Link>,{' '}
              <Link href="https://app.Plendprotocol.io/">https://app.Plendprotocol.io/</Link>,{' '}
              <Link href="https://docs.Plendprotocol.io/">https://docs.Plendprotocol.io/</Link> or
              any sub-URL of any such URL and any other Plend-related website or web application
              maintained by the Site Operator.
            </MarkedListItem>
          </MarkedList>
        </MarkedListItem>
        <MarkedListItem disableTypography>
          <Typography mb={4} sx={{ fontWeight: 600, textDecoration: 'underline' }}>
            Site Operator Discretion; Certain Risks of the Site
          </Typography>
          <Typography mb={4}>
            Each User hereby acknowledges and agrees and consents to, and assumes the risks of, the
            matters described in this Section 2.
          </Typography>
          <MarkedList markerType="decimal" name="sod" sx={{ mb: 4 }}>
            <MarkedListItem disableTypography>
              <Typography mb={4} sx={{ fontWeight: 600 }}>
                Content
              </Typography>
              <Typography mb={4}>
                Site Operator makes no representations or warranties as to the quality, origin, or
                ownership of any content found on or available through the Site. Site Operator shall
                not be liable for any errors, misrepresentations, or omissions in, of, and about,
                the content, nor for the availability of the content. Site Operator shall not be
                liable for any losses, injuries, or damages from the purchase, inability to
                purchase, display, or use of content.
              </Typography>
            </MarkedListItem>
            <MarkedListItem disableTypography>
              <Typography mb={4} sx={{ fontWeight: 600 }}>
                Token Lists and Token Identification
              </Typography>
              <Typography mb={4}>
                In providing information about tokens, the Site associates or presumes the
                association of a token name, symbol or logo with a specific smart contract deployed
                to one or more blockchain systems. In making such associations, the Site relies upon
                third-party resources which may not be accurate or may not conform to a given User's
                expectations. Multiple smart contracts can utilize the same token name or token
                symbol as one another, meaning that the name or symbol of a token does not guarantee
                that it is the token desired by the User or generally associated with such name or
                symbol. Users must not rely on the name, symbol or branding of a token on the Site,
                but instead must examine the specific smart contract associated with the name,
                symbol or branding and confirm that the token accords with User's expectations.
              </Typography>
            </MarkedListItem>
            <MarkedListItem disableTypography>
              <Typography mb={4} sx={{ fontWeight: 600 }}>
                User Responsibility for Accounts & Security
              </Typography>
              <Typography mb={4}>
                Users are solely responsible for all matters relating to their accounts, addresses
                and tokens and for ensuring that all uses thereof comply fully with these Terms.
                Users are solely responsible for protecting the data integrity and confidentiality
                of their login information and passwords or private keys for the Site or any wallet
                applications or devices used in connection with the Site. The compatibility of the
                Site with wallet applications and devices or other third-party applications or
                devices is not intended as, and you hereby agree not to construe such compatibility
                as, an endorsement or recommendation thereof or a warranty, guarantee, promise or
                assurance regarding the fitness or security thereof.
              </Typography>
            </MarkedListItem>
            <MarkedListItem disableTypography>
              <Typography mb={4} sx={{ fontWeight: 600 }}>
                No Site Fees; Third-Party Fees Irreversible
              </Typography>
              <Typography mb={4}>
                There are no fees or charges for use of the Site. Use of the Plend Smart Contract
                System and use of Plend Mainnet and Plend Altchains are subject to third-party
                transaction fees. The Site Operator does not receive such fees and has no ability to
                reverse or refund any amounts paid in error.
              </Typography>
            </MarkedListItem>
            <MarkedListItem disableTypography>
              <Typography mb={4} sx={{ fontWeight: 600 }}>
                Site Operator Has No Business Plan and May Discontinue, Limit, Terminate or Refuse
                Support for the Site or any Smart Contracts, Tokens or Pools
              </Typography>
              <Typography mb={4}>
                The Site is a free web application operated and maintained in the sole and absolute
                discretion of the Site Operator. The Site Operator assumes no duties, liabilities,
                obligations or undertakings to continue operating or maintaining the availability of
                the Site and may terminate or change the Site in any or all respects at any time.
                The Site Operator has no business plan or revenue model for the Site. The Site
                Operator does not have revenues or a viable long-term business plan or
                capital-raising plan, and may become unable or unwilling to fund the operational
                costs of the Site on a long-term basis or to fund the upgrade costs required to keep
                the Site up to date with current technologies.
              </Typography>
              <Typography mb={4}>
                The Site Operator has no obligation to ensure that the Site is a complete and
                accurate source of all information relating to the Plend Smart Contract System,
                Plend Mainnet, Plend Altchains or any other subject matter. The Site does not
                necessarily display all tokens that are available for trading in connection with the
                Plend Smart Contract System or Plend Mainnet or Plend Altchains. Even if the Site
                currently displays a particular token or token pair, the Site may discontinue
                tracking and publishing information about that token or token pair at any time, in
                the Site Operator's sole and absolute discretion. In the event of such a
                discontinuation, Users may need to rely on third-party resources such as block
                explorers or Etherlink Mainnet Nodes, or applicable node for a Plend Altchains, in
                order to get equivalent information, and, depending on the User's level of expertise
                and the quality of such third-party resources, this may result in the User incurring
                financial losses due to delays or mistakes in processing information or
                transactions.
              </Typography>
              <Typography mb={4}>
                The Plend Smart Contract Protocol is available under a free open-source license, and
                the Site Operator does not have proprietary or exclusive rights in all copies or
                derivatives thereof. It is possible that additional copies of the Plend Smart
                Contract Protocol or derivatives thereof will be deployed to other Blockchain
                Systems in the future by any person, resulting in the existence of multiple ‘Plend-
                branded' smart contract systems. The Site Operator is under no obligation to publish
                information for all such copies of the Plend Smart Contract Protocol or to warn
                Users regarding the existence of such alternatives.
              </Typography>
            </MarkedListItem>
            <MarkedListItem disableTypography>
              <Typography mb={4} sx={{ fontWeight: 600 }}>
                Site Operator May Deny or Limit Access on a Targeted Basis
              </Typography>
              <Typography mb={4}>
                The Site Operator reserves the right to terminate or limit any person's User status
                or access to or use of the Site at any time, without or without notice, as
                determined in the Site Operator's sole and absolute discretion. Such terminations
                and limitations may be based on any factor or combination of factors, including a
                person's identity, blockchain address, IP address, internet service provider,
                virtual provider network provider, metadata, browser software, device type, wallet
                application, wallet device, region of citizenship or residence or current location,
                or suspicion that User has engaged or intends to engage in any Prohibited Use.
              </Typography>
            </MarkedListItem>
            <MarkedListItem disableTypography>
              <Typography mb={4} sx={{ fontWeight: 600 }}>
                Site Operator May Cooperate with Investigations and Disclose Information
              </Typography>
              <Typography mb={4}>
                The Site Operator reserves the right at all times to cooperate with any governmental
                or law enforcement investigation or to disclose any information it deems necessary
                to satisfy any applicable law, regulation, legal process or governmental request, or
                to edit, refuse to post or to remove any information or materials, in whole or in
                part, based on any applicable law, regulation, legal process or governmental
                request, in the Site Operator's sole and absolute discretion.
              </Typography>
            </MarkedListItem>
            <MarkedListItem disableTypography>
              <Typography mb={4} sx={{ fontWeight: 600 }}>
                No Regulatory Supervision
              </Typography>
              <Typography mb={4}>
                The Site Operator and the Site are not registered or qualified with or licensed by,
                do not report to and are not under the active supervision of any government agency
                or financial regulatory authority or organization. No government or regulator has
                approved or consulted with the Site Operator regarding the accuracy or completeness
                of any information available on the Site. Similarly, the technology, systems, tokens
                and persons relevant to information published on the Site may not be registered with
                or under the active supervision of or be registered or qualified with or licensed by
                any government agency or financial regulatory authority or organization. The Site
                Operator is not registered as a broker, dealer, advisor, transfer agent or other
                intermediary.
              </Typography>
            </MarkedListItem>
          </MarkedList>
        </MarkedListItem>
        <MarkedListItem disableTypography>
          <Typography mb={4} sx={{ fontWeight: 600, textDecoration: 'underline' }}>
            Intellectual Property Matters
          </Typography>
          <MarkedList markerType="decimal" name="ipm" sx={{ mb: 4 }}>
            <MarkedListItem disableTypography>
              <Typography mb={4} sx={{ fontWeight: 600 }}>
                License to Use Site
              </Typography>
              <Typography mb={4}>
                Each User, subject to and conditioned upon such User's eligibility under and
                acceptance of and adherence to these Terms, is hereby granted a personal, revocable,
                non-exclusive, non-transferable, non-sub-licensable license to view, access and use
                the Site for the Permitted Uses in accordance with these Terms.
              </Typography>
            </MarkedListItem>
            <MarkedListItem disableTypography>
              <Typography mb={4} sx={{ fontWeight: 600 }}>
                Site Code & License
              </Typography>
              <Typography mb={4}>
                The software code for the Site is available at https://github.com/plentynetwork and
                is licensed for use in connection with the Plend Smart Contract System, Etherlink
                Mainnet and Altchains.
              </Typography>
            </MarkedListItem>
            <MarkedListItem disableTypography>
              <Typography mb={4} sx={{ fontWeight: 600 }}>
                Privacy Policy
              </Typography>
              <Typography mb={4}>
                The Site Operator may directly or indirectly collect and temporarily store
                personally identifiable information for operational purposes, including for the
                purpose of identifying blockchain addresses or IP addresses that may indicate use of
                the Site from prohibited jurisdictions or by sanctioned persons or other Prohibited
                Uses. Any such personal information collected will be processed in accordance with
                the Privacy Policy available at XXX.
              </Typography>
            </MarkedListItem>
            <MarkedListItem disableTypography>
              <Typography mb={4} sx={{ fontWeight: 600 }}>
                Plend Smart Contract Protocol
              </Typography>
              <Typography mb={4}>
                The Plend Smart Contract Protocol will be available in various repositories at
                GITHUBLINK, and will be subject to any licenses set forth in each such repository,
                as applicable.
              </Typography>
            </MarkedListItem>
          </MarkedList>
        </MarkedListItem>
        <MarkedListItem disableTypography>
          <Typography mb={4} sx={{ fontWeight: 600, textDecoration: 'underline' }}>
            Permitted & Prohibited Uses
          </Typography>
          <MarkedList markerType="decimal" name="ppu" sx={{ mb: 4 }}>
            <MarkedListItem disableTypography>
              <Typography mb={4} sx={{ fontWeight: 600 }}>
                Permitted Uses
              </Typography>
              <Typography mb={4}>
                The Site is available exclusively for use by technologically and financially
                sophisticated persons who wish to use the Site for informational purposes only as an
                aid to their own research, due diligence and financial decision making. Before
                utilizing information from the Site (including any draft transaction messages) to
                engage in transactions, each User must independently verify the accuracy of such
                information (and the consistency of such draft transaction messages with the User's
                intentions). The foregoing are the <strong>“Permitted Uses”</strong>.
              </Typography>
            </MarkedListItem>
            <MarkedListItem disableTypography>
              <Typography mb={4} sx={{ fontWeight: 600 }}>
                Prohibited Uses
              </Typography>
              <Typography mb={4}>
                Each User must not, directly or indirectly, in connection with their use of the
                Site:
              </Typography>
              <MarkedList markerType="disc" name="prohibiteduses" sx={{ mb: 4 }}>
                <MarkedListItem>utilize the Site other than for the Permitted Uses;</MarkedListItem>
                <MarkedListItem>
                  utilize the Site at any time when any representation of User set forth in Section
                  5 is untrue or inaccurate;
                </MarkedListItem>
                <MarkedListItem>
                  rely on the Site as a basis for or a source of advice concerning any financial
                  decision making or transactions;
                </MarkedListItem>
                <MarkedListItem>
                  employ any device, scheme or artifice to defraud, or otherwise materially mislead,
                  any person;
                </MarkedListItem>
                <MarkedListItem>
                  engage in any act, practice or course of business that operates or would operate
                  as a fraud or deceit upon the Site Operator or any other person;
                </MarkedListItem>
                <MarkedListItem>
                  violate, breach or fail to comply with any applicable provision of these Terms or
                  any other terms of service, privacy policy, trading policy or other contract
                  governing the use of the Site;
                </MarkedListItem>
                <MarkedListItem>
                  engage or attempt to engage in or assist any hack of or attack on the Site or any
                  wallet application or device, including any “sybil attack”, “DoS attack” or
                  “griefing attack” or theft;
                </MarkedListItem>
                <MarkedListItem>
                  commit any violation of applicable laws, rules or regulations;
                </MarkedListItem>
                <MarkedListItem disableTypography>
                  <Typography mb={4}>
                    engage in or knowingly facilitate any “front-running”, “wash trading”, “pump and
                    dump trading”, “ramping”, “cornering” or fraudulent, deceptive or manipulative
                    trading activities, including:
                  </Typography>
                  <MarkedList markerType="decimal" name="mta">
                    <MarkedListItem>
                      trading at successively lower or higher prices for the purpose of creating or
                      inducing a false, misleading or artificial appearance of activity, unduly or
                      improperly influencing market prices or establishing a price which does not
                      reflect the true state of the market;
                    </MarkedListItem>
                    <MarkedListItem>
                      trading without changes in material beneficial ownership for the purpose of
                      creating or inducing a false or misleading appearance of trading activity or
                      creating or inducing a false or misleading appearance with respect to market
                      conditions; or
                    </MarkedListItem>
                    <MarkedListItem>
                      participating in, facilitating, assisting or knowingly transacting with any
                      pool, syndicate or joint account organized for the purpose of unfairly or
                      deceptively influencing market prices;
                    </MarkedListItem>
                  </MarkedList>
                </MarkedListItem>
                <MarkedListItem>
                  transact in securities, commodities futures, trading of commodities on a
                  leveraged, margined or financed basis, binary options (including prediction-market
                  transactions), real estate or real estate leases, equipment leases, debt
                  financings, equity financings or other similar transactions, in each case, if such
                  transactions do not comply with all laws, rules and regulations applicable to the
                  parties and assets engaged therein;
                </MarkedListItem>
                <MarkedListItem>
                  engage in token-based or other financings of a business, enterprise, venture, DAO,
                  software development project or other initiative, including ICOs, DAICOs, IEOs, or
                  other token-based fundraising events; or
                </MarkedListItem>
                <MarkedListItem>
                  engage in any act, practice or course of business that operates to circumvent any
                  sanctions or export controls targeting the User or the country or territory where
                  User is located.
                </MarkedListItem>
              </MarkedList>
              <Typography>
                The foregoing matters are referred to herein as <strong>“Prohibited Uses”</strong>.
              </Typography>
            </MarkedListItem>
          </MarkedList>
        </MarkedListItem>
        <MarkedListItem disableTypography>
          <Typography mb={4} sx={{ fontWeight: 600, textDecoration: 'underline' }}>
            Representations and Warranties of Users
          </Typography>
          <Typography mb={4}>
            By using the Site, each User represents and warrants to Site Operator that the following
            statements and information are accurate and complete at all relevant times. In the event
            that any such statement or information becomes untrue as to a User, User shall
            immediately cease accessing and using the Site.
          </Typography>
          <MarkedList markerType="decimal" name="warranties" sx={{ mb: 4 }}>
            <MarkedListItem disableTypography>
              <Typography mb={4} sx={{ fontWeight: 600 }}>
                Adult Status; Capacity; Residence; Etc.
              </Typography>
              <Typography mb={4}>
                If User is an individual, User is of legal age in the jurisdiction in which User
                resides (and in any event is older than eighteen years of age) and is of sound mind.
                If User is a business entity, User is duly organized, validly existing and in good
                standing under the laws of the jurisdiction in which it is organized, and has all
                requisite power and authority for a business entity of its type to carry on its
                business as now conducted.
              </Typography>
            </MarkedListItem>
            <MarkedListItem disableTypography>
              <Typography mb={4} sx={{ fontWeight: 600 }}>
                Power and Authority
              </Typography>
              <Typography mb={4}>
                User has all requisite capacity, power and authority to accept the terms and
                conditions of these Terms and to carry out and perform its obligations under these
                Terms. These Terms constitutes a legal, valid and binding obligation of User
                enforceable against User in accordance with its terms.
              </Typography>
            </MarkedListItem>
            <MarkedListItem disableTypography>
              <Typography mb={4} sx={{ fontWeight: 600 }}>
                No Conflict; Compliance with Law
              </Typography>
              <Typography mb={4}>
                User agreeing to these Term and using the Site does not constitute, and would not
                reasonably be expected to result in (with or without notice, lapse of time, or both)
                a breach, default, contravention or violation of any law applicable to User, or
                contract or agreement to which User is a party or by which User is bound.
              </Typography>
            </MarkedListItem>
            <MarkedListItem disableTypography>
              <Typography mb={4} sx={{ fontWeight: 600 }}>
                Absence of Sanctions
              </Typography>
              <Typography mb={4}>
                User is not, (and, if User is an entity, User is not owned or controlled by any
                other person who is), acting, directly or indirectly, on behalf of any other person
                who is, located, ordinarily resident, organized, established, or domiciled in the
                United States or any country where use of the Plend Smart Contract System, Plend
                Mainnet, Plend Altchains or related activities is illegal, prohibited, or requires a
                permit or license. User is not (and, if User is an entity, User is not owned or
                controlled by any other person who is) acting, directly or indirectly, on behalf of
                any other person who is: in contravention of any applicable laws and regulations,
                including anti-money laundering regulations or conventions; a terrorist or a member
                of a terrorist organization; identified on, or operationally based or domiciled in a
                country or territory that is included in, any list of prohibited parties under any
                law or by any nation or government, state or other political subdivision thereof,
                any entity exercising legislative, judicial or administrative functions of or
                pertaining to government such as the sanctions lists maintained by the United
                Kingdom (as are extended to the BVI by statutory instrument), United Nations
                (whether through the Security Council, or otherwise), the U.S. government (including
                the U.S. Treasury Department's Specially Designated Nationals list and Foreign
                Sanctions Evaders list), or the European Union (EU) or its member states; a senior
                foreign political figure, any member of a senior foreign political figure's
                immediate family or any close associate of a senior foreign political figure unless
                the director of the Foundation, after being specifically notified by the User in
                writing that it is such a person, conduct further due diligence and determines that
                the User shall be permitted to use the Site; or as trustee, agent, representative or
                nominee for a foreign shell bank. The tokens or other funds User uses to participate
                in the Plend Smart Contract System, Plend Mainnet or Plend Altchains are not derived
                from, and do not otherwise represent the proceeds of, any activities done in
                violation or contravention of any law.
              </Typography>
            </MarkedListItem>
            <MarkedListItem disableTypography>
              <Typography mb={4} sx={{ fontWeight: 600 }}>
                Non-Reliance
              </Typography>
              <Typography mb={4}>
                User is knowledgeable, experienced and sophisticated in using and evaluating
                blockchain and related technologies and assets, including Plend Altchains, tokens,
                yield-generating smart contract systems, automated market making smart contract
                systems, bonding curve systems and “smart contracts” (runtime bytecode deployed to
                Plend Altchains or another blockchain). User has conducted its own thorough
                independent investigation and analysis of the Plend Smart Contract System, Plend
                Mainnet, Plend Altchains and the other matters contemplated by these Terms, and has
                not relied upon any information, statement, omission, representation or warranty,
                express or implied, written or oral, made byor on behalf of Site Operator in
                connection therewith, except as expressly set forth by Site Operator in these Terms.
              </Typography>
            </MarkedListItem>
          </MarkedList>
        </MarkedListItem>
        <MarkedListItem disableTypography>
          <Typography mb={4} sx={{ fontWeight: 600, textDecoration: 'underline' }}>
            Risks, Disclaimers and Limitations of Liability
          </Typography>
          <Typography mb={4}>
            Each User hereby acknowledges and agrees and consents to, and assumes the risks of, the
            matters described in this Section 6.
          </Typography>
          <MarkedList markerType="decimal" name="risks" sx={{ mb: 4 }}>
            <MarkedListItem disableTypography>
              <Typography mb={4} sx={{ fontWeight: 600 }}>
                No Consequential, Incidental or Punitive Damages
              </Typography>
              <Typography mb={4}>
                Notwithstanding anything to the contrary contained on the Site, in these Terms, or
                in any other agreement or publication, Site Operator shall not be liable to any
                person, whether in contract, tort (including pursuant to any cause of action
                alleging negligence), warranty or otherwise, for any economic or other damages to
                any User or other person, including any special, incidental, consequential,
                indirect, punitive or exemplary damages (including but not limited to lost data,
                lost profits or savings, loss of business or other economic loss) arising out of or
                related to these Terms, whether or not Site Operator has been advised or knew of the
                possibility of such damages, and regardless of the nature of the cause of action or
                theory asserted.
              </Typography>
            </MarkedListItem>
            <MarkedListItem disableTypography>
              <Typography mb={4} sx={{ fontWeight: 600 }}>
                Disclaimer of Representations
              </Typography>
              <Typography mb={4}>
                The Site is being provided on an “AS IS” and “AS AVAILABLE” basis. To the fullest
                extent permitted by law, Site Operator is not making, and hereby disclaims, any and
                all information, statements, omissions, representations and warranties, express or
                implied, written or oral, equitable, legal or statutory, in connection with the Site
                and the other matters contemplated by these Terms, including any representations or
                warranties of title, non-infringement, merchantability, usage, security, uptime,
                reliability, suitability or fitness for any particular purpose, workmanship or
                technical quality of any code or software used in or relating to the Site. User
                acknowledges and agrees that use of the Site is at the User's own risk.
              </Typography>
            </MarkedListItem>
            <MarkedListItem disableTypography>
              <Typography mb={4} sx={{ fontWeight: 600 }}>
                No Responsibility for Tokens; No Guarantee of Uniqueness or IP
              </Typography>
              <Typography mb={4}>
                Site Operator has no responsibility for the tokens traded by Users on the Plend
                Smart Contract System or Plend Mainnet or Plend Altchains. Site Operator does not
                investigate and cannot guarantee or warrant the authenticity, originality,
                uniqueness, marketability, legality or value of any token traded by Users on the
                Plend Smart Contract System or Plend Mainnet or Plend Altchains, even if information
                about such token is available on the Site.
              </Typography>
            </MarkedListItem>
            <MarkedListItem disableTypography>
              <Typography mb={4} sx={{ fontWeight: 600 }}>
                No Professional Advice or Liability
              </Typography>
              <Typography mb={4}>
                All information provided by or on behalf of Site Operator is for informational
                purposes only and should not be construed as professional, accounting or legal
                advice. Users should not take or refrain from taking any action in reliance on any
                information contained in these Terms or provided by or on behalf of Site Operator.
                Before Users make any financial, legal, or other decisions involving the Site, Users
                should seek independent professional advice from persons licensed and qualified in
                the area for which such advice would be appropriate.
              </Typography>
            </MarkedListItem>
            <MarkedListItem disableTypography>
              <Typography mb={4} sx={{ fontWeight: 600 }}>
                Limited Survival Period for Claims
              </Typography>
              <Typography mb={4}>
                Any claim or cause of action a User may have or acquire in connection with the Site
                or any of the other matters contemplated by these Terms shall survive for the
                shorter of, and may be brought against Site Operator solely prior to: (a) the
                expiration of the statute of limitations applicable thereto; and (b) the date that
                is six months after the date on which the facts and circumstances giving rise to
                such claim or cause of action first arose.
              </Typography>
            </MarkedListItem>
            <MarkedListItem disableTypography>
              <Typography mb={4} sx={{ fontWeight: 600 }}>
                Third-Party Offerings and Content
              </Typography>
              <Typography mb={4}>
                References, links or referrals to or connections with or reliance on third-party
                resources, products, services or content, including smart contracts developed or
                operated by third parties, may be provided to Users in connection with the Site. In
                addition, third parties may offer promotions related to the Site. Site Operator does
                not endorse or assume any responsibility for any activities of or resources,
                products, services, content or promotions owned, controlled, operated or sponsored
                by third parties. If Users access any such resources, products, services or content
                or participate in any such promotions, Users do so solely at their own risk. Each
                User hereby expressly waives and releases Site Operator from all liability arising
                from User's use of any such resources, products, services or content or
                participation in any such promotions.
              </Typography>
              <Typography mb={4}>
                User further acknowledges and agrees that Site Operator shall not be responsible or
                liable, directly or indirectly, for any damage or loss caused or alleged to be
                caused by or in connection with use of or reliance on any such resources, products,
                services, content or promotions from third parties.
              </Typography>
            </MarkedListItem>
            <MarkedListItem disableTypography>
              <Typography mb={4} sx={{ fontWeight: 600 }}>
                Certain Uses and Risks of Blockchain Technology
              </Typography>
              <MarkedList markerType="disc" name="blockchainrisks" sx={{ mb: 4 }}>
                <MarkedListItem>
                  <Underlined>Use of Blockchain Technology</Underlined>. Site Operator or third
                  parties may utilize experimental cryptographic technologies and blockchain
                  technologies, including tokens, cryptocurrencies, stablecoins, “smart contracts,”
                  consensus algorithms, voting systems and distributed, decentralized or
                  peer-to-peer networks or systems in connection with the Site or systems about
                  which the Site provides information. Each User acknowledges and agrees that such
                  technologies are novel, experimental, and speculative, and that therefore there is
                  significant uncertainty regarding the operation and effects and risks thereof and
                  the application of existing law thereto.
                </MarkedListItem>
                <MarkedListItem>
                  <Underlined>Certain Risks of Blockchain Technology</Underlined>. The technologies
                  relevant to the Site depend on public peer-to-peer networks such as Etherlink
                  Mainnet and the Plend Altchains that are not under the control or influence of
                  Site Operator and are subject to many risks and uncertainties. Such technologies
                  include the Plend Smart Contract System, which Site Operator has no ability to
                  change, other than ceasing to display information about certain “smart contracts”
                  or adding information about new “smart contracts”. Users are solely responsible
                  for the safekeeping of the private key associated with the blockchain address used
                  in connection with the Plend Smart Contract System. Site Operator will not be able
                  to restore or issue any refund in respect of property lost or frozen due to loss
                  of private keys or otherwise. If a User is not able to spend or use tokens due to
                  loss or theft of the corresponding private key or otherwise, a User will be unable
                  to enjoy the benefits of such tokens.
                </MarkedListItem>
                <MarkedListItem>
                  <Underlined>Certain Risks of Smart Contract Technology</Underlined>. Digital
                  assets relevant to the Site depend on the Plend Smart Contract System or other
                  smart contracts deployed to Plend Altchains or other blockchain systems, or on the
                  Etherlink Mainnet, each of which may be coded or deployed by persons other than
                  Site Operator. Etherlink Mainnet, Plend Altchains, and other Blockchain Systems,
                  and, once deployed to a Blockchain System, the code of smart contracts, including
                  the Plend Smart Contract System, typically cannot be modified, or can only be
                  modified in limited ways. In the event that the Etherlink Mainnet, Plend
                  Altchains, Plend Smart Contract System or other smart contracts or blockchain
                  systems are adversely affected by malfunctions, bugs, defects, malfunctions,
                  hacking, theft, attacks, negligent coding or design choices, or changes to the
                  applicable protocol rules, Users may be exposed to a risk of total loss and
                  forfeiture of all relevant digital assets. Site Operator assumes no liability or
                  responsibility for any of the foregoing matters.
                </MarkedListItem>
                <MarkedListItem>
                  <Underlined>Asset Prices</Underlined>. The fiat-denominated prices and value in
                  public markets of cryptocurrencies and tokens have historically been subject to
                  dramatic fluctuations and may be highly volatile. As relatively new products and
                  technologies, blockchain-based assets are not widely accepted as a means of
                  payment for goods and services. A significant portion of demand for these assets
                  is generated by speculators and investors seeking to profit from the short- or
                  long-term holding of blockchain assets. The market value of any token may decline
                  below the price for which a User acquires such asset through the Etherlink
                  Mainnet, Plend Altchains or Plend Smart Contract System or on any other system.
                  User acknowledges and agrees that the costs and speeds of transacting with
                  cryptographic and blockchain-based systems such as the Etherlink Mainnet, Plend
                  Altchains and Plend Smart Contract System are variable and may increase or
                  decrease dramatically at any time, resulting in prolonged inability to access or
                  use any tokens.
                </MarkedListItem>
                <MarkedListItem>
                  <Underlined>Regulatory Uncertainty</Underlined>. Blockchain technologies and
                  digital assets are subject to many legal and regulatory uncertainties, and the
                  Etherlink Mainnet, Plend Altchains, Plend Smart Contract System or any tokens
                  could be adversely impacted by one or more regulatory or legal inquiries, actions,
                  suits, investigations, claims, fines or judgments, which could impede or limit the
                  ability of User to continue the use and enjoyment of such assets and technologies.
                </MarkedListItem>
                <MarkedListItem>
                  <Underlined>Cryptography Risks</Underlined>. Cryptography is a progressing field.
                  Advances in code cracking or technical advances such as the development of quantum
                  computers may present risks to Blockchain Systems, the Etherlink Mainnet, Plend
                  Altchains, Plend Smart Contract System or tokens, including the theft, loss or
                  inaccessibility thereof.
                </MarkedListItem>
                <MarkedListItem>
                  <Underlined>Fork Handling</Underlined>. Etherlink Mainnet, Plend Altchains, the
                  Plend Smart Contract System, and all tokens may be subject to “forks.” Forks occur
                  when some or all persons running the software clients for a particular blockchain
                  system adopt a new client or a new version of an existing client that: (i) changes
                  the protocol rules in backwards-compatible or backwards-incompatible manner that
                  affects which transactions can be added into later blocks, how later blocks are
                  added to the blockchain, or other matters relating to the future operation of the
                  protocol; or (ii) reorganizes or changes past blocks to alter the history of the
                  blockchain. Some forks are “contentious” and thus may result in two or more
                  persistent alternative versions of the protocol or blockchain, either of which may
                  be viewed as or claimed to be the legitimate or genuine continuation of the
                  original. Site Operator may not be able to anticipate, control or influence the
                  occurrence or outcome of forks, and does not assume any risk, liability or
                  obligation in connection therewith. Without limiting the generality of the
                  foregoing, Site Operator does not assume any responsibility to notify a User of
                  pending, threatened or completed forks. Site Operator will respond (or refrain
                  from responding) to any forks in such manner as Site Operator determines in its
                  sole and absolute discretion, and Site Operator shall not have any duty or
                  obligation or liability to a User if such response (or lack of such response) acts
                  to a User detriment. Without limiting the generality of the foregoing, Site
                  Operator's possible and permissible responses to a fork may include: (i) honoring
                  the Etherlink Mainnet, Plend Altchains, Plend Smart Contract System and tokens on
                  both chains;(ii) honoring the Etherlink Mainnet, Plend Altchains, Plend Smart
                  Contract System and tokens on only one of the chains; (iii) honoring the Etherlink
                  Mainnet, Plend Altchains, Plend Smart Contract System and tokens in different
                  respects or to a different extent on both chains; or (iv) any other response or
                  policy or procedure, as determined by Site Operator in its sole and absolute
                  discretion. Each User assumes full responsibility to independently remain apprised
                  of and informed about possible forks, and to manage the User's own interests and
                  risks in connection therewith.
                </MarkedListItem>
                <MarkedListItem>
                  <Underlined>Essential Third-Party Software Dependencies</Underlined>. The
                  Etherlink Mainnet, Plend Altchains, Plend Smart Contract System and other relevant
                  Blockchain Systems and smart contracts are public software utilities which are
                  accessible directly through any compatible node or indirectly through any
                  compatible “wallet” application (such as the web browser plugin MetaMask) which
                  interacts with such a node. Interacting with the Plend Smart Contract System does
                  not require use of the Site, but the Site provides a convenient and user- friendly
                  method of reading and displaying data from the Plend Smart Contract System and
                  generating standard transaction messages compatible with the Plend Smart Contract
                  System. Because the Site does not provide wallet software or nodes for Plend
                  Mainnet or Plend Altchains, such software constitutes an essential third-party or
                  user dependency without which the Plend Smart Contract System cannot be utilized,
                  and tokens cannot be traded or used. Furthermore, the site may utilize APIs,
                  middleware and servers of Site Operator or third parties, and Site Operator does
                  not guarantee the continued operation, maintenance, availability or security of
                  any of the foregoing dependencies.
                </MarkedListItem>
              </MarkedList>
            </MarkedListItem>
            <MarkedListItem disableTypography>
              <Typography mb={4} sx={{ fontWeight: 600 }}>
                Tax Issues
              </Typography>
              <Typography mb={4}>
                The tax consequences of purchasing, selling, holding, transferring or locking tokens
                or otherwise utilizing the Smart Smart Contract System are uncertain, may vary by
                jurisdiction and may be adverse to a User. Site Operator has undertaken no due
                diligence or investigation into such tax consequences, assumes no obligation or
                liability to optimize the tax consequences to any person and is not providing any
                tax advice.
              </Typography>
            </MarkedListItem>
            <MarkedListItem disableTypography>
              <Typography mb={4} sx={{ fontWeight: 600 }}>
                Legal Limitations on Disclaimers
              </Typography>
              <Typography mb={4}>
                Some jurisdictions do not allow the exclusion of certain warranties or the
                limitation or exclusion of certain liabilities and damages. Accordingly, some of the
                disclaimers and limitations set forth in these Terms may not apply in full to
                specific Users. The disclaimers and limitations of liability provided in these terms
                shall apply to the fullest extent permitted by applicable law.
              </Typography>
            </MarkedListItem>
            <MarkedListItem disableTypography>
              <Typography mb={4} sx={{ fontWeight: 600 }}>
                Officers, Directors, Etc.
              </Typography>
              <Typography mb={4}>
                All provisions of these Terms which disclaim or limit obligations or liabilities of
                Site Operator shall also apply, mutatis mutandis, to the officers, directors,
                secretary, supervisors, members, employees, independent contractors, agents,
                stockholders, debtholders and affiliates of Site Operator.
              </Typography>
            </MarkedListItem>
            <MarkedListItem disableTypography>
              <Typography mb={4} sx={{ fontWeight: 600 }}>
                Indemnification
              </Typography>
              <Typography mb={4}>
                Each User shall defend, indemnify, compensate, reimburse and hold harmless Site
                Operator (and each of its officers, directors, secretary, supervisors, members,
                employees, agents and affiliates) from any claim, demand, action, damage, loss, cost
                or expense, including without limitation reasonable attorneys' fees, arising out or
                relating to (a) User's use of, or conduct in connection with, the Site; (b) User's
                violation of these Terms or any other applicable policy or contract of Site
                Operator; or (c) User's violation of any rights of any other person or entity.
              </Typography>
            </MarkedListItem>
          </MarkedList>
        </MarkedListItem>
        <MarkedListItem disableTypography>
          <Typography mb={4} sx={{ fontWeight: 600, textDecoration: 'underline' }}>
            Governing Law; Dispute Resolution
          </Typography>
          <MarkedList markerType="decimal" name="governinglaw" sx={{ mb: 4 }}>
            <MarkedListItem disableTypography>
              <Typography mb={4} sx={{ fontWeight: 600 }}>
                Governing Law
              </Typography>
              <Typography mb={4}>
                These Terms shall be governed by and construed and interpreted in accordance with
                the laws of the BVI (irrespective of the choice of laws principles) as to all
                matters, including matters of validity, construction, effect, enforceability,
                performance and remedies. Although the Site may be available in other jurisdictions,
                each User hereby acknowledges and agrees that such availability shall not be deemed
                to give rise to general or specific personal jurisdiction over Site Operator in any
                forum outside the BVI.
              </Typography>
            </MarkedListItem>
            <MarkedListItem disableTypography>
              <Typography mb={4} sx={{ fontWeight: 600 }}>
                Settlement Negotiations
              </Typography>
              <Typography mb={4}>
                If a User has a potential legal dispute, claim or cause of action against Site
                Operator, the User shall first (prior to initiating any litigation proceedings)
                contact Site Operator by sending an email to contact@marsfoundation.xyz describing
                the nature of the potential dispute, claim or cause of action and providing all
                relevant documentation and evidence thereof. User shall use commercially reasonable
                efforts to negotiate a settlement of any such legal dispute, claim or cause of
                action within 60 days of the delivery of such email. Any such dispute, claim or
                cause of action that is not finally resolved by a binding, written settlement
                agreement within such 60 days shall be brought and resolved exclusively in
                accordance with the following provisions of this Section 7.
              </Typography>
            </MarkedListItem>
            <MarkedListItem disableTypography>
              <Typography mb={4} sx={{ fontWeight: 600 }}>
                Agreement to Binding, Exclusive Arbitration
              </Typography>
              <MarkedList markerType="disc" name="agreementtobinding" sx={{ mb: 4 }}>
                <MarkedListItem>
                  <Underlined>Mandatory Binding Arbitration</Underlined>. All disputes,
                  controversies, claims, breaches and terminations directly or indirectly arising
                  out of or in connection with or directly or indirectly relating to these Terms or
                  any of the matters or transactions contemplated by these Terms (for the avoidance
                  of doubt, including any claim seeking to invalidate, or alleging that, all or any
                  part of these Terms is unenforceable, void or voidable) (such claims, disputes and
                  controversies, collectively, <strong>“Disputes”</strong>) shall be resolved by
                  confidential, binding arbitration to be seated in the BVI in accordance with the
                  laws of the BVI (irrespective of the choice of laws principles) and conducted in
                  the English language by a single arbitrator pursuant to the rules of the BVI
                  International Mediation and Arbitration Centre (the <strong>“Rules”</strong>). The
                  arbitrator shall be appointed in accordance with the procedures set out in the
                  Rules. The award or decision of the arbitrator shall be final and binding upon the
                  parties and the parties expressly waive any right under the laws of any
                  jurisdiction to appeal or otherwise challenge the award, ruling or decision of the
                  arbitrator. The judgment of any award or decision may be entered in any court
                  having competent jurisdiction to the extent necessary. No party hereto shall (or
                  shall permit its representatives to) commence, continue or pursue any Dispute in
                  any court; provided, however, that the Company shall be entitled to obtain an
                  injunction or injunctions to prevent breaches of this provision and to enforce
                  specifically the terms and provisions thereof, this being in addition to any other
                  remedy to which the Company is entitled at law or in equity, and the parties
                  hereto hereby waive the requirement of any posting of a bond or security for costs
                  in connection with any such application for injunctive relief or specific
                  performance.
                </MarkedListItem>
                <MarkedListItem disableTypography>
                  <Typography mb={4}>
                    <Underlined>Waiver of Jury Trial</Underlined>. The parties hereby acknowledge,
                    represent and warrant that they understand that:
                  </Typography>
                  <MarkedList markerType="decimal" name="waiverofjurytrial">
                    <MarkedListItem>
                      there is no judge or jury in arbitration, and, absent this mandatory
                      provision, the parties may have the right to sue in court and have a jury
                      trial concerning Disputes;
                    </MarkedListItem>
                    <MarkedListItem>
                      in some instances, the costs of arbitration could exceed the costs of
                      litigation;
                    </MarkedListItem>
                    <MarkedListItem>
                      the right to discovery may be more limited in arbitration than in court; and
                    </MarkedListItem>
                    <MarkedListItem>
                      court review of an arbitration award is limited. Each of the parties hereto
                      hereby irrevocably waives any and all right to trial by jury in any action,
                      suit or other legal proceeding arising out of or related to these Terms or the
                      transactions contemplated hereby.
                    </MarkedListItem>
                  </MarkedList>
                </MarkedListItem>
                <MarkedListItem>
                  <Underlined>Confidentiality of Arbitration</Underlined>. Except to the extent
                  necessary to enforce their respective rights under these Terms or as otherwise
                  required by applicable law or regulation, the parties undertake to maintain
                  confidentiality as to the existence and events of the arbitration proceedings and
                  as to all submissions, correspondence and evidence relating to the arbitration
                  proceedings, save for disclosure to the relevant party's auditors, legal counsel
                  or other advisors. This provision shall survive the termination of the arbitral
                  proceedings.
                </MarkedListItem>
                <MarkedListItem>
                  <Underlined>Court Jurisdiction</Underlined>. To the extent that any court is
                  required to consider the enforceability of this Section 7.3, to enforce any
                  judgment of the arbitrator, then, without limiting this Section 7.3 or any other
                  provision of this Agreement, the User (A) hereby irrevocably and unconditionally
                  submits to the jurisdiction of the courts of the BVI for such purpose; (B) agrees
                  not to commence any suit, action or other proceeding arising in connection with or
                  based upon this instrument or the matters contemplated by this instrument except
                  before the courts of the BVI, and (C) hereby waives, and agrees not to assert, by
                  way of motion, as a defence, or otherwise, in any such suit, action or proceeding,
                  any claim that it is not subject personally to the jurisdiction of the above-
                  named courts, that its property is exempt or immune from attachment or execution,
                  that the suit, action or proceeding is brought in an inconvenient forum, that the
                  venue of the suit, action or proceeding is improper or that this instrument or the
                  subject matter hereof or thereof may not be enforced in or by such court.
                </MarkedListItem>
              </MarkedList>
            </MarkedListItem>
            <MarkedListItem disableTypography>
              <Typography mb={4} sx={{ fontWeight: 600 }}>
                Class Action Waiver
              </Typography>
              <Typography mb={4}>
                All Users hereby agree that any arbitration or other permitted action with respect
                to any Dispute shall be conducted in their individual capacities only and not as a
                class action or other representative action, and the Users expressly waive their
                right to file a class action or seek relief on a class basis.
              </Typography>
            </MarkedListItem>
          </MarkedList>
        </MarkedListItem>
        <MarkedListItem disableTypography>
          <Typography mb={4} sx={{ fontWeight: 600, textDecoration: 'underline' }}>
            Miscellaneous
          </Typography>
          <MarkedList markerType="decimal" name="misc">
            <MarkedListItem disableTypography>
              <Typography mb={4} sx={{ fontWeight: 600 }}>
                Headings
              </Typography>
              <Typography mb={4}>
                The headings and captions contained in these Terms are for convenience of reference
                only, shall not be deemed to be a part of these Terms and shall not be referred to
                in connection with the construction or interpretation of these Terms.
              </Typography>
            </MarkedListItem>
            <MarkedListItem disableTypography>
              <Typography mb={4} sx={{ fontWeight: 600 }}>
                Successors and Assigns
              </Typography>
              <Typography mb={4}>
                These Terms shall inure to the benefit of Site Operator, the Users, and their
                respective permitted successors, permitted assigns, permitted transferees and
                permitted delegates and shall be binding upon all of the foregoing persons and any
                person who may otherwise succeed to any right, obligation or liability under these
                Terms by operation of law or otherwise. A User shall not assign any of a User rights
                or delegate any of a User liabilities or obligations under these Terms to any other
                person without Site Operator's advance written consent. Site Operator may freely
                assign, transfer or delegate its rights, obligations and liabilities under these
                Terms to the maximum extent permitted by applicable law.
              </Typography>
            </MarkedListItem>
            <MarkedListItem disableTypography>
              <Typography mb={4} sx={{ fontWeight: 600 }}>
                Severability
              </Typography>
              <Typography mb={4}>
                In the event that any provision of these Terms, or the application of any such
                provision to any person or set of circumstances, shall be determined by an
                arbitrator or court of competent jurisdiction to be invalid, unlawful, void or
                unenforceable to any extent: (a) the remainder of these Terms, and the application
                of such provision to persons or circumstances other than those as to which it is
                determined to be invalid, unlawful, void or unenforceable, shall not be impaired or
                otherwise affected and shall continue to be valid and enforceable to the fullest
                extent permitted by law; and (b) Site Operator shall have the right to modify these
                Terms so as to effect the original intent of the parties as closely as possible in
                an acceptable manner in order that the transactions contemplated hereby be consumed
                as originally contemplated to the fullest extent possible.
              </Typography>
            </MarkedListItem>
            <MarkedListItem disableTypography>
              <Typography mb={4} sx={{ fontWeight: 600 }}>
                Force Majeure
              </Typography>
              <Typography mb={4}>
                Site Operator shall not incur any liability or penalty for not performing any act or
                fulfilling any duty or obligation hereunder or in connection with the matters
                contemplated hereby by reason of any occurrence that is not within its control
                (including any provision of any present or future law or regulation or any act of
                any governmental authority, any act of God or war or terrorism, any epidemic or
                pandemic, or the unavailability, disruption or malfunction of the Internet, the
                World Wide Web or any other electronic network, the Etherlink Mainnet or Plend
                Altchains or Plend Smart Contract System or any aspect thereof, or any consensus
                attack, or hack, or denial-of-service or other attack on the foregoing or any aspect
                thereof, or on the other software, networks and infrastructure that enables Site
                Operator to provide the Site), it being understood that Site Operator shall use
                commercially reasonable efforts, consistent with accepted practices in the
                industries in which Site Operator operates, as applicable, to resume performance as
                soon as reasonably practicable under the circumstances.
              </Typography>
            </MarkedListItem>
            <MarkedListItem disableTypography>
              <Typography mb={4} sx={{ fontWeight: 600 }}>
                Amendments and Modifications
              </Typography>
              <Typography mb={4}>
                These Terms may only be amended, modified, altered or supplemented by or with the
                written consent of Site Operator. Site Operator reserves, the right, in its sole and
                absolute discretion, to amend, modify, alter or supplement these Terms from time to
                time. The most current version of these Terms will be posted on the Site. Any
                changes or modifications will be effective immediately upon the modified Agreement
                being posted to the Site. A User shall be responsible for reviewing and becoming
                familiar with any such modifications.
              </Typography>
              <Typography mb={4}>
                Each User hereby waives any right such User may have to receive specific notice of
                such changes or modifications. Use of the Site by a User after any modification of
                these Terms constitutes the User's acceptance of the modified terms and conditions.
                If a User does not agree to any such modifications, the User must immediately stop
                using the Site.
              </Typography>
            </MarkedListItem>
            <MarkedListItem disableTypography>
              <Typography mb={4} sx={{ fontWeight: 600 }}>
                No Implied Waivers
              </Typography>
              <Typography mb={4}>
                No failure or delay on the part of Site Operator in the exercise of any power,
                right, privilege or remedy under these Terms shall operate as a waiver of such
                power, right, privilege or remedy; and no single or partial exercise of any such
                power, right, privilege or remedy shall preclude any other or further exercise
                thereof or of any other power, right, privilege or remedy. Site Operator shall not
                be deemed to have waived any claim arising out of these Terms, or any power, right,
                privilege or remedy under these Terms, unless the waiver of such claim, power,
                right, privilege or remedy is expressly set forth in a written instrument duly
                executed and delivered on behalf of Site Operator, and any such waiver shall not be
                applicable or have any effect except in the specific instance in which it is given.
              </Typography>
            </MarkedListItem>
            <MarkedListItem disableTypography>
              <Typography mb={4} sx={{ fontWeight: 600 }}>
                Entire Agreement
              </Typography>
              <Typography mb={4}>
                These Terms constitutes the entire agreement between the parties relating to the
                subject matter hereof and supersede all prior or contemporaneous agreements and
                understandings, both written and oral, between the parties with respect to the
                subject matter hereof.
              </Typography>
            </MarkedListItem>
            <MarkedListItem disableTypography>
              <Typography mb={4} sx={{ fontWeight: 600 }}>
                Rules of Interpretation
              </Typography>
              <MarkedList markerType="disc" name="rulesofinterpret" sx={{ mb: 4 }}>
                <MarkedListItem>
                  “hereof,” “herein,” “hereunder,” “hereby” and words of similar import will, unless
                  otherwise stated, be construed to refer to these Terms as a whole and not to any
                  particular provision of these Terms;
                </MarkedListItem>
                <MarkedListItem>
                  “include(s)” and “including” shall be construed to be followed by the words
                  “without limitation”;
                </MarkedListItem>
                <MarkedListItem>
                  “or” shall be construed to be the “inclusive or” rather than “exclusive or” unless
                  the context requires otherwise;
                </MarkedListItem>
                <MarkedListItem>
                  any rule of construction to the effect that ambiguities are to be resolved against
                  the drafting party shall not be applied in the construction or interpretation of
                  these Terms;
                </MarkedListItem>
                <MarkedListItem>
                  section titles, captions and headings are for convenience of reference only and
                  have no legal or contractual effect;
                </MarkedListItem>
                <MarkedListItem>
                  whenever the context requires: the singular number shall include the plural, and
                  vice versa; the masculine gender shall include the feminine and neuter genders;
                  the feminine gender shall include the masculine and neuter genders; and the neuter
                  gender shall include the masculine and feminine genders; and
                </MarkedListItem>
                <MarkedListItem>
                  except as otherwise indicated, all references in these Terms to “Sections,”
                  “clauses,” etc., are intended to refer to sections, clauses, etc. of these Terms.
                </MarkedListItem>
              </MarkedList>
            </MarkedListItem>
          </MarkedList>
        </MarkedListItem>
      </MarkedList>
    </Paper>
  );
};

export default TOSContent;
