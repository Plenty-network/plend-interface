import { ContentContainer } from 'src/components/ContentContainer';
import { MainLayout } from 'src/layouts/MainLayout';
import PPContent from 'src/modules/privacy-policy/PPContent';
import PPTopPanel from 'src/modules/privacy-policy/PPTopPanel';

export default function PrivacyPolicy() {
  return (
    <>
      <PPTopPanel />
      <ContentContainer>
        <PPContent />
      </ContentContainer>
    </>
  );
}

PrivacyPolicy.getLayout = function getLayout(page: React.ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};
