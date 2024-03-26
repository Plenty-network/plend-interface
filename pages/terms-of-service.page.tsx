import { ContentContainer } from 'src/components/ContentContainer';
import { MainLayout } from 'src/layouts/MainLayout';
import TOSContent from 'src/modules/terms-of-service/TOSContent';
import TOSTopPanel from 'src/modules/terms-of-service/TOSTopPanel';

export default function TermsOfService() {
  return (
    <>
      <TOSTopPanel />
      <ContentContainer>
        <TOSContent />
      </ContentContainer>
    </>
  );
}

TermsOfService.getLayout = function getLayout(page: React.ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};
